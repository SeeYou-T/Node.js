require("../utils/db");
const { signupModel, findOneModel } = require("../models/user");
const { encrypt } = require("../utils/tools");
// 注册用户
const signup = async (req, res, next) => {
  const { username, password } = req.body;

  // 密码加密
  let hash = encrypt(password);

  // 判断用户是否存在
  let findUser = await findOneModel(username);
  console.log(findUser);
  if (findUser) {
    // return "用户名已存在";
    res.render("error", { data: JSON.stringify({ message: "用户名已存在" }) });
  }
  signupModel({ username, password: hash });

  res.render("index", { data: JSON.stringify({ message: "用户注册成功" }) });
};
module.exports = { signup };
