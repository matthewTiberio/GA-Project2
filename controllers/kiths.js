const Kith = require("../models/kith");

module.exports = {
  index,
  new: newPerson,
  create,
  show,
  update,
};

function index(req, res) {
  Kith.find({}, function (err, persons) {
    if (err) return res.send(err.message);
    res.render("kith/index", { persons });
  });
}

function newPerson(req, res) {
  Kith.find({}, function (err, persons) {
    if (err) return res.send(err.message);
    res.render("kith/new", { persons });
  });
}

function create(req, res) {
  const Kith = new Kith(req.body);
  kith.glutenFree = !!req.body.glutenFree;
  kith.nutFree = !!req.body.nutFree;
  kith.dairyFree = !!req.body.dairyFree;
  kith.vegetarian = !!req.body.vegetarian;
  kith.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect("/kith");
  });
}

function show(req, res) {
  Kith.find({}, function (err, persons) {
    if (err) return res.send(err.message);
    Kith.findById(req.params.id, function (err, person) {
      if (err) res.send(err.message);
      res.render("kith/show", { persons, person });
    });
  });
}

function update(req, res) {
  Kith.find({}, function (err, persons) {
    if (err) return res.send(err.message);
    Kith.findById(req.params.id, function (err, person) {
      if (err) res.send(err.message);
      person.firstName = req.body.firstName;
      person.lastName = req.body.lastName;
      person.glutenFree = !!req.body.glutenFree;
      person.nutFree = !!req.body.nutFree;
      person.dairyFree = !!req.body.dairyFree;
      person.vegetarian = !!req.body.vegetarian;
      person.comment = req.body.comment;
      person.save(function (err) {
        if (err) return res.send(err.message);
        res.redirect("/kith");
      });
    });
  });
}
