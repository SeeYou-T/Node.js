const md5 = require("md5");
const encrypt = (password) => {
  return md5(password);
};
module.exports = {
  encrypt,
};
