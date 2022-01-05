// 加密
const { createHash } = require("crypto");

const password = "admin123";
const hash = createHash("sha1").update(password).digest("hex");
console.log(hash);
// 打印:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
