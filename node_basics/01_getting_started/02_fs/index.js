const fs = require("fs");
fs.writeFile("./log.text", "haha", (error, data) => {
  if (error) {
  } else {
    console.log("文件创建成功");
  }
});
