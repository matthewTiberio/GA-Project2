const Event = require("../models/event");
const Kith = require("../models/kith");

module.exports = {
  new: newItem,
  create,
  show,
  update,
  delete: deleteItem,
};

function newItem(req, res) {
  Event.findById(req.params.id)
    .populate("guestList")
    .exec(function (err, event) {
      Kith.find({}, function (err, persons) {
        event.guestList.sort(sortList);
        res.render("menus/new", { event, persons });
      });
    });
}

function create(req, res) {
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
  Event.findById(req.params.id)
    .populate("guestList")
    .populate({ path: "menu.madeBy", select: "firstName" })
    .exec(function (err, event) {
      const item = event.menu.id(req.query.menuId);
      Kith.find({}, function (err, persons) {
        event.guestList.sort(sortList);
        res.render("menus/show", { event, item, persons });
      });
    });
}

function update(req, res) {
  Event.findById(req.params.id, function (err, event) {
    const item = event.menu.id(req.query.menuId);
    item.name = req.body.name;
    item.madeBy = req.body.madeBy;
    item.type = req.body.type;
    item.comment = req.body.comment;
    item.glutenFree = !!req.body.glutenFree;
    item.nutFree = !!req.body.nutFree;
    item.dairyFree = !!req.body.dairyFree;
    item.vegetarian = !!req.body.vegetarian;
    event.save(function (err) {
      res.redirect(`/events/${event._id}`);
    });
  });
}

function deleteItem(req, res) {
  Event.findById(req.params.id, function (err, event) {
    event.menu.id(req.query.menuId).remove();
    event.save(function (err) {
      res.redirect(`/events/${event._id}`);
    });
  });
}

function sortList(a, b) {
  let fa = a.firstName.toLowerCase(),
    fb = b.firstName.toLowerCase();

  if (fa < fb) {
    return -1;
  } else if (fa > fb) {
    return 1;
  } else {
    return 0;
  }
}
