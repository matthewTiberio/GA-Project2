const Event = require("../models/event");
const Kith = require("../models/kith");

module.exports = {
  index,
  new: newEvent,
  create,
  show,
  addGuest,
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
    .exec(function (err, event) {
      Kith.find({ _id: { $nin: event.guestList } }, function (err, persons) {
        res.render("events/show", { event, persons });
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
