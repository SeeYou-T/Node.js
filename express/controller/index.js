var path = require("path");
var fs = require("fs");
var jwt = require("jsonwebtoken");

const list = (req, res) => {
  //   let data = `<ul>`;
  //   for (let index = 0; index < 10; index++) {
  //     data += `<li>line ${index}</li>`;
  //   }
  //   data += `</ul>`;

  //   let dataObj = {
  //     res: true,
  //     data: [],
  //   };
  //   for (let index = 0; index < 10; index++) {
  //     dataObj.data.push(`line ${index}`);
  //   }
  const dataArray = require("../model/list");
  res.render("list", {
    dataArray,
  });
};

const token = (req, res, next) => {
  // 对称加密
  // const tk = jwt.sign({username: 'liHua'}, 'hahaha')

  // const decoded = jwt.verify(tk, 'hahaha')
  // res.send(decoded)

  // 非对称加密
  const privateKey = fs.readFileSync(
    path.join(__dirname, "../keys/rsa_private_key.pem")
  );
  const tk = jwt.sign({ username: "admin" }, privateKey, {
    algorithm: "RS256",
  });

  const publicKey = fs.readFileSync(
    path.join(__dirname, "../keys/rsa_public_key.pem")
  );
  const result = jwt.verify(tk, publicKey);
  res.send(result);
};

module.exports = { list, token };
