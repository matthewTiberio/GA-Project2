const Event = require("../models/event");
const Kith = require("../models/kith");

module.exports = {
  new: newItem,
};

function newItem(req, res) {
  Event.findById(req.params.id, function (err, event) {
    Kith.find({}, function (err, persons) {
      res.render("menus/new", { event, persons });
    });
  });
}
