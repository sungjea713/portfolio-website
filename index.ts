const PORT = process.env.PORT || 3000;

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);

    // Serve main HTML
    if (url.pathname === "/" || url.pathname === "/index.html") {
      const html = await Bun.file("./index.html").text();
      return new Response(html, {
        headers: { "Content-Type": "text/html" }
      });
    }

    // Serve frontend.tsx as bundled JavaScript
    if (url.pathname === "/frontend.js") {
      const result = await Bun.build({
        entrypoints: ["./frontend.tsx"],
        minify: false,
        target: "browser",
      });

      if (result.outputs.length > 0) {
        return new Response(result.outputs[0], {
          headers: { "Content-Type": "application/javascript" }
        });
      }
      return new Response("Build failed", { status: 500 });
    }

    // Serve CSS
    if (url.pathname === "/styles.css") {
      const css = await Bun.file("./styles.css").text();
      return new Response(css, {
        headers: { "Content-Type": "text/css" }
      });
    }

    // Health check API
    if (url.pathname === "/api/health") {
      return new Response(JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`🚀 Server running at http://localhost:${PORT}`);
console.log(`📝 Open http://localhost:${PORT} to view your portfolio`);
