const http = require("http");

const server = http.createServer((request, response) => {
  //   console.log(request, response);
  //   const url = request.url;
  let data = "";
  request.on("data", (chunk) => {
    data += chunk;
  });
  request.on("end", () => {
    response.writeHead(200, {
      // "content-type": "text/plain",
      // "content-type": "text/html",
      "content-type": "application/json;charset=utf-8",
    });
    console.log(data);
    response.write("<h1>home</h1>");
    //   response.write(url);
    // response.write(`{"url:"${url}"}`);
    response.end();
  });
});

server.listen(8080, () => {
  console.log("listen:8080");
});
