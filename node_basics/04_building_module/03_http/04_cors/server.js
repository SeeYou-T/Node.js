const http = require("http");
// const url = require("url");
const server = http.createServer((req, res) => {
  const urlStr = req.url;
  console.log(urlStr);
  const myURL = new URLSearchParams(urlStr.split("?")[1]);
  console.log(myURL);
  const cb = myURL.get("cb");
  // console.log(cb);
  switch (urlStr.split("?")[0]) {
    case "/api/data":
      res.writeHead(200, {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
      res.write(`{"res":true}`);
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
