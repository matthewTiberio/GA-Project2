var express = require("express");
var router = express.Router();
const eventsCtrl = require("../controllers/events");
const menusCtrl = require("../controllers/menus");

module.exports = router;

router.get("/", eventsCtrl.index);
router.get("/new", eventsCtrl.new);
router.get("/:id/edit", eventsCtrl.edit);
router.get("/:id", eventsCtrl.show);

router.post("/", eventsCtrl.create);
router.post("/:id/guest", eventsCtrl.addGuest);

router.put("/:id", eventsCtrl.update);

router.delete("/:id/guest", eventsCtrl.removeGuest);
