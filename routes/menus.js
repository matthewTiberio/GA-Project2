var express = require("express");
var router = express.Router();
const menusCtrl = require("../controllers/menus");

module.exports = router;

router.get("/events/:id/menu/new", menusCtrl.new);

router.post("/events/:id/menu", menusCtrl.create);
