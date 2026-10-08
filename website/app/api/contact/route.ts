import { Resend } from "resend";

export const runtime = "nodejs";

const CONTACT_RECIPIENT = "minpiyer@gmail.com";
const MAX_PAYLOAD_BYTES = 20_000;

const limits = {
  name: 100,
  email: 254,
  location: 120,
  age: 30,
  currentLevel: 200,
  learningGoal: 1000,
  message: 3000,
  website: 200,
} as const;

type ContactPayload = Record<keyof typeof limits, string>;

function getString(
  body: Record<string, unknown>,
  key: keyof ContactPayload,
  errors: string[],
  required = false,
) {
  const value = body[key];

  if (value === undefined || value === null) {
    if (required) errors.push(`${key} is required.`);
    return "";
  }

  if (typeof value !== "string") {
    errors.push(`${key} must be a string.`);
    return "";
  }

  const trimmed = value.trim();
  if (required && !trimmed) errors.push(`${key} is required.`);
  if (trimmed.length > limits[key]) errors.push(`${key} is too long.`);
  return trimmed;
}

function validatePayload(value: unknown) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return { data: null, errors: ["Invalid request body."] };
  }

  const body = value as Record<string, unknown>;
  const errors: string[] = [];
  const data: ContactPayload = {
    name: getString(body, "name", errors, true),
    email: getString(body, "email", errors, true),
    location: getString(body, "location", errors),
    age: getString(body, "age", errors),
    currentLevel: getString(body, "currentLevel", errors),
    learningGoal: getString(body, "learningGoal", errors),
    message: getString(body, "message", errors),
    website: getString(body, "website", errors),
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailPattern.test(data.email)) errors.push("email is invalid.");

  const learningIntent = `${data.learningGoal} ${data.message}`.trim();
  if (learningIntent.length < 3) {
    errors.push("Please include what you would like to learn or a message.");
  }

  return { data, errors };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

function emailRows(data: ContactPayload) {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Location", data.location],
    ["Age", data.age],
    ["Current Level", data.currentLevel],
    ["What would you like to learn?", data.learningGoal],
    ["Message", data.message],
  ] as const;

  const text = rows.map(([label, value]) => `${label}:\n${value || "—"}`).join("\n\n");
  const html = rows
    .map(([label, value]) => `<tr><th style="padding:10px 12px;text-align:left;vertical-align:top;border:1px solid #d9cdbd;background:#f4e8d4">${label}</th><td style="padding:10px 12px;border:1px solid #d9cdbd;white-space:pre-wrap">${escapeHtml(value || "—")}</td></tr>`)
    .join("");

  return {
    text,
    html: `<h1 style="font-family:Georgia,serif;color:#4b2c23">Crazy Piano — New Lesson Inquiry</h1><table style="border-collapse:collapse;font-family:Arial,sans-serif;color:#2f241f">${html}</table>`,
  };
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return Response.json({ ok: false, message: "Unsupported content type." }, { status: 415 });
  }

  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_PAYLOAD_BYTES) {
    return Response.json({ ok: false, message: "Request is too large." }, { status: 413 });
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return Response.json({ ok: false, message: "Could not read request." }, { status: 400 });
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_PAYLOAD_BYTES) {
    return Response.json({ ok: false, message: "Request is too large." }, { status: 413 });
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    return Response.json({ ok: false, message: "Invalid JSON." }, { status: 400 });
  }

  const { data, errors } = validatePayload(parsed);
  if (!data || errors.length > 0) {
    return Response.json({ ok: false, message: "Please check the form fields.", errors }, { status: 400 });
  }

  // Honeypot: bots receive a neutral success response without triggering email delivery.
  if (data.website) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!apiKey || !from) {
    return Response.json({ ok: false, message: "Email service is not configured." }, { status: 503 });
  }

  const content = emailRows(data);
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: CONTACT_RECIPIENT,
      subject: "Crazy Piano — New Lesson Inquiry",
      replyTo: data.email,
      text: content.text,
      html: content.html,
    });

    if (error) {
      return Response.json({ ok: false, message: "Email delivery failed." }, { status: 502 });
    }
  } catch {
    return Response.json({ ok: false, message: "Email delivery failed." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
