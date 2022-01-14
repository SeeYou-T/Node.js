var express = require("express");
var router = express.Router();
const { signup } = require("../controllers/index");

/* GET home page. */
router.post("/signup", signup);

module.exports = router;
