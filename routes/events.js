var express = require("express");
var router = express.Router();
const eventsCtrl = require("../controllers/events");

module.exports = router;

router.get("/", eventsCtrl.index);
router.get("/new", eventsCtrl.new);
router.get("/:id", eventsCtrl.show);

router.post("/", eventsCtrl.create);
router.post("/:id/guest", eventsCtrl.addGuest);
