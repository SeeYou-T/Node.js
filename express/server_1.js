const express = require("express");

const app = express();

// 中间件栈
const middlewares = [
  (req, res, next) => {
    console.log(0);
    // res.send("ha");
    next();
  },
  (req, res, next) => {
    console.log(1);
    next();
  },
  (req, res) => {
    console.log(2);
  },
];

// 回调函数又称为中间件
app.use("/", middlewares);
// app.use("/api", (req, res) => {
//   res.send("api");
// });

app.listen(8080, () => {
  console.log("localhost");
});
