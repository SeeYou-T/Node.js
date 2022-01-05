const fs = require("fs");
const http = require("http");

const mime = require("mime");

// const server = http.createServer((req, res) => {
//   //   res.end("ok");
//   const urlString = req.url;
//   switch (urlString) {
//     case "/":
//       res.end("login");
//       break;
//     case "/home":
//       fs.readFile("./home.html", "utf8", (err, content) => {
//         res.end(content);
//       });
//       break;
//     case "/app.js":
//       fs.readFile("./app.js", "utf8", (err, content) => {
//         res.end(content);
//       });
//       break;
//     case "/reshui.png":
//       fs.readFile("./reshui.png", (err, content) => {
//         res.end(content);
//       });
//       break;
//     default:
//       res.end("404");
//       break;
//   }
// });
const server = http.createServer((req, res) => {
  //   res.end("ok");
  const urlString = req.url;
  const type = mime.getType(urlString.split(".")[1]);
  console.log(type);
  const file = fs.readFileSync(`.${urlString}`);
  res.end(file);
});

server.listen(8080, () => {
  console.log("localhost");
});
