// app/sitemap.xml/route.ts (or wherever your current file lives)
export function GET() {
  const base = "https://football-gamechangers.vercel.app"; // live site base
  const lastmod = new Date().toISOString();

  const paths: Array<{ path: string; priority: string; changefreq?: string }> = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/insights", priority: "0.8", changefreq: "weekly" },
    { path: "/insights/1-1-football-coaching-leeds-guide", priority: "0.7" },
    { path: "/insights/football-coaching-for-kids-leeds", priority: "0.7" },
    { path: "/insights/how-to-get-into-football-academy-leeds", priority: "0.7" },
    { path: "/insights/off-season-football-training-leeds", priority: "0.7" },
    { path: "/insights/small-group-vs-team-training-football", priority: "0.7" },
  ];

  const urls = paths
    .map(
      (p) => `  <url>\n    <loc>${base}${p.path}</loc>\n    <lastmod>${lastmod}</lastmod>${
        p.changefreq ? `\n    <changefreq>${p.changefreq}</changefreq>` : ""
      }\n    <priority>${p.priority}</priority>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
