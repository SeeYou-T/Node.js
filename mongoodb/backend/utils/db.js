const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/users");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

var userSchema = mongoose.Schema({
  username: String,
  password: String,
});
var Users = mongoose.model("users", userSchema);

exports.Users = Users;
