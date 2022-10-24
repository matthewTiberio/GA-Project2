var express = require("express");
var router = express.Router();
const kithsCtrl = require("../controllers/kiths");

module.exports = router;

router.get("/", kithsCtrl.index);
router.get("/new", kithsCtrl.new);
router.post("/", kithsCtrl.create);
