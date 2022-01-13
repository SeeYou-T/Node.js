const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 6667 });

wss.on("connection", function connection(ws) {
  ws.on("open", () => {
    console.log("connect");
    ws.send("ha");
  });
  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});
