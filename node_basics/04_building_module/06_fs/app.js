const fs = require("fs");
const fsPromise = require("fs").promises;

// 文件夹创建
// fs.mkdir("logs", (err) => {
//   if (err) throw err;
//   console.log("文件夹创建成功");
// });

//文件夹名称修改
// fs.rename("./logs", "./log", () => {
//   console.log("文件夹名称修改成功");
// });

// 删除文件夹
// fs.rmdir("./log", () => {
//   console.log("done");
// });

// fs.readdir("./logs", (err, result) => {
//   console.log(result);
// });

// fs.writeFile("./logs/log1.log", "哈 \n 哈", (err) => {
//   console.log("创建文件");
// });

// fs.appendFile("./logs/log1.log", "!!!", () => {
//   console.log("追加成功");
// });

// fs.unlink("./logs/log1.log",(err)=>{
//     console.log("删除文件")
// });

// fs.readFile("./logs/log1.log", "utf8", (err, content) => {
//   console.log(content);
// });
// fs.readFile("./logs/log1.log", (err, content) => {
//   console.log(content.toString());
// });

// 同步读取文件
// const content = fs.readFileSync("./logs/log1.log");
// console.log(content.toString());
// console.log("continue...");

// (async () => {
//   let data = await fsPromise.readFile("./logs/log1.log");
//   console.log(data.toString());
// })();

// 遍历创建文件
// for (let i = 0; i < 10; i++) {
//   fs.writeFile(`./logs/log-${i}`, `log-${i}`, (err) => {
//     console.log(i);
//   });
// }

// 读取文件目录
// function readDir(params) {
//   fs.readdir(params, (err, content) => {
//     console.log(content);
//     content.forEach((value, index) => {
//       let dirStr = `${params}/${value}`;
//       fs.stat(dirStr, (err, stats) => {
//         if (stats.isDirectory()) {
//           readDir(dirStr);
//         } else {
//           fs.readFile(dirStr, "utf8", (err, content) => {
//             console.log(content);
//           });
//         }
//       });
//     });
//   });
// }

// readDir("./");

fs.watch("./logs/log-0", () => {
  console.log("change");
});
