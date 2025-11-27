// app/robots.txt/route.ts
export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Sitemap: https://football-gamechangers.vercel.app/sitemap.xml",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
