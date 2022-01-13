const path = require("path");
const mime = require("mime");
const fs = require("fs");

function myReadFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if (err) {
        // reject("error");
        resolve("error 404");
      } else {
        resolve(content);
      }
    });
  });
}

async function readStaticFile(filePathName) {
  console.log(filePathName);
  let ext = path.parse(filePathName).ext;
  let mimeType = mime.getType(ext);
  console.log(ext);
  // 判断文件是否存在
  let data;
  if (fs.existsSync(filePathName)) {
    if (ext) {
      // 文件
      data = await myReadFile(filePathName);
      // .then((result) => (data = result))
      // .catch((err) => (data = err));
    } else {
      //文件夹
      data = await myReadFile(path.join(filePathName, "/index.html"));
      // .then((result) => (data = result))
      // .catch((err) => (data = err));
    }
    console.log("ok");
  } else {
    console.log("file is not found");
    data = "file is not found";
  }
  return {
    mimeType,
    data,
  };
}

module.exports = readStaticFile;
