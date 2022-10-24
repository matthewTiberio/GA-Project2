var express = require("express");
var router = express.Router();
const eventsCtrl = require("../controllers/events");

module.exports = router;

router.get("/", eventsCtrl.index);
