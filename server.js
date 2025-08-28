const WebSocket = require("ws");
const http = require("http");

const PORT = process.env.PORT || 10000; // Render injects PORT automatically
const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("✅ Client connected");

  ws.on("message", (msg) => {
    console.log("📩 Received:", msg.toString());
    ws.send(`Server received: ${msg}`);
  });

  ws.on("close", () => {
    console.log("⚠️ Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
