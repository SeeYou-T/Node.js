const http = require("http");
const path = require("path");
const readStaticFile = require("./readStaticFile.js");

const server = http.createServer(async (req, res) => {
  let urlString = req.url;
  let filePathName = path.join(__dirname, "./public", urlString);
  let { data, mimeType } = await readStaticFile(filePathName);
  // console.log(data);
  res.writeHead(200, {
    "content-type": mimeType,
  });
  res.write(data);
  res.end();
});

server.listen(8080, () => {
  console.log("localhost");
});
