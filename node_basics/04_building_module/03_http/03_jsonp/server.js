const http = require("http");
// const url = require("url");
const server = http.createServer((req, res) => {
  const urlStr = req.url;
  console.log(urlStr.pathname);
  const myURL = new URLSearchParams(urlStr.split("?")[1]);
  const cb = myURL.get("cb");
  //   console.log(myURL.get("cb"));
  switch (urlStr.split("?")[0]) {
    case "/api/data":
      res.write(`${cb}("list.data")`);
      break;

    default:
      res.write("null");
      break;
  }
  res.end();
});

server.listen(8080, () => {
  console.log("localhost");
});
