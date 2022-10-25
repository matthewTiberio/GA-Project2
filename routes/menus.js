var express = require("express");
var router = express.Router();
const menusCtrl = require("../controllers/menus");

module.exports = router;

router.get("/new", menusCtrl.new);
