function redirectTo(request: Request, pathname: string) {
  return new Response(null, {
    status: 301,
    headers: { location: new URL(pathname, request.url).toString() },
  });
}

export function GET(request: Request) {
  return redirectTo(request, "/performances");
}
