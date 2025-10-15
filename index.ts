import index from "./index.html";

const PORT = process.env.PORT || 3000;

Bun.serve({
  port: PORT,
  routes: {
    "/": index,
    "/api/health": {
      GET: () => {
        return new Response(JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }), {
          headers: { "Content-Type": "application/json" }
        });
      }
    }
  },
  development: {
    hmr: true,
    console: true,
  }
});

console.log(`🚀 Server running at http://localhost:${PORT}`);
console.log(`📝 Open http://localhost:${PORT} to view your portfolio`);
