const { Users } = require("../utils/db");

const findOneModel = (username) => {
  return Users.findOne({ username });
};
const signupModel = ({ username, password }) => {
  const users = new Users({
    username,
    password,
  });
  return users.save();
};
module.exports = {
  signupModel,
  findOneModel,
};
