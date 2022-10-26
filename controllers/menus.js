const Event = require("../models/event");
const Kith = require("../models/kith");

module.exports = {
  new: newItem,
  create,
  show,
};

function newItem(req, res) {
  Event.findById(req.params.id, function (err, event) {
    Kith.find({}, function (err, persons) {
      res.render("menus/new", { event, persons });
    });
  });
}

function create(req, res) {
  console.log(req.params.id);
  Event.findById(req.params.id, function (err, event) {
    const newMenu = {};
    newMenu.name = req.body.name;
    newMenu.madeBy = req.body.madeBy;
    newMenu.type = req.body.type;
    newMenu.comment = req.body.comment;
    newMenu.glutenFree = !!req.body.glutenFree;
    newMenu.nutFree = !!req.body.nutFree;
    newMenu.dairyFree = !!req.body.dairyFree;
    newMenu.vegetarian = !!req.body.vegetarian;
    event.menu.push(newMenu);
    event.save(function (err) {
      res.redirect(`/events/${event._id}`);
    });
  });
}

function show(req, res) {
  Event.findById(req.params.id, function (err, event) {
    const item = event.menu.id(req.query.menuId);
    Kith.find({}, function (err, persons) {
      res.render("menus/show", { event, item, persons });
    });
  });
}
