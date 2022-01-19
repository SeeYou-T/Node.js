const express = require("express");

const router = express.Router();
const { list, token } = require("../controller/index.js");

router.get("/api/list", list);
router.get("/api/token", token);

// // 获取数据
// router.get("/api", (req, res) => {
//   res.send("api");
// });
// // 添加数据
// router.post("/post", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   res.send(data);
// });
// // 修改数据-覆盖式
// router.put("/index", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   res.send(data);
// });
// // 修改数据-选择试修改
// router.patch("/index", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   res.send(data);
// });
// // 删除数据
// router.delete("/index", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   res.send(data);
// });

module.exports = router;
