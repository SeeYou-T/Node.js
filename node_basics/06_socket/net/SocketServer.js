const net = require("net");
const server = net.createServer((socket) => {
  // socket.end("goodbye\n");
  socket.write("ha");
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});

server.on("error", (err) => {
  // 在这里处理错误。
  throw err;
});

// 获取任意未使用的端口。
server.listen("6667", () => {
  console.log("opened server on", server.address());
});
