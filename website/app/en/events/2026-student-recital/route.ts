export function GET(request: Request) {
  return new Response(null, {
    status: 301,
    headers: { location: new URL("/en/performances/2026-student-recital", request.url).toString() },
  });
}
