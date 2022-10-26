const Event = require("../models/event");
const Kith = require("../models/kith");

module.exports = {
  index,
  new: newEvent,
  create,
  show,
  addGuest,
  removeGuest,
  edit,
  update,
  delete: deleteEvent,
};

function index(req, res) {
  Event.find({}, function (err, events) {
    if (err) return res.send(err.message);
    res.render("events/index", { events });
  });
}

function newEvent(req, res) {
  res.render("events/new");
}

function create(req, res) {
  const event = new Event(req.body);
  event.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect("/events");
  });
}

function show(req, res) {
  Event.findById(req.params.id)
    .populate("guestList")
    .populate({ path: "menu.madeBy", select: "firstName" })
    .exec(function (err, event) {
      Kith.find({ _id: { $nin: event.guestList } }, function (err, persons) {
        const guestCount = event.guestList.length;
        const restrictions = {};
        restrictions.gFCount = event.guestList.filter(function (guest) {
          return guest.glutenFree;
        }).length;
        restrictions.nFCount = event.guestList.filter(function (guest) {
          return guest.nutFree;
        }).length;
        restrictions.dFCount = event.guestList.filter(function (guest) {
          return guest.dairyFree;
        }).length;
        restrictions.vgCount = event.guestList.filter(function (guest) {
          return guest.vegetarian;
        }).length;
        res.render("events/main", { event, persons, guestCount, restrictions });
      });
    });
}

function addGuest(req, res) {
  Event.findById(req.params.id, function (err, event) {
    event.guestList.push(req.body.kithId);
    event.save(function (err) {
      res.redirect(`/events/${event._id}`);
    });
  });
}

function removeGuest(req, res) {
  Event.findById(req.params.id, function (err, event) {
    const idx = event.guestList.indexOf(req.body.kithId);
    event.guestList.splice(idx, 1);
    event.save(function (err) {
      res.redirect(`/events/${event.id}`);
    });
  });
}

function edit(req, res) {
  Event.findById(req.params.id, function (err, event) {
    let date = event.date;
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    let datestr = date.toISOString().substring(0, 16);
    res.render("events/show", { event, datestr });
  });
}

function update(req, res) {
  Event.findById(req.params.id, function (err, event) {
    event.name = req.body.name;
    event.location = req.body.location;
    event.date = req.body.date;
    event.descr = req.body.descr;
    event.save(function (err) {
      res.redirect(`/events/${event.id}`);
    });
  });
}

function deleteEvent(req, res) {
  Event.deleteOne({ _id: req.params.id }, function (err) {
    if (err) res.send(err.message);
    res.redirect("/events");
  });
}
