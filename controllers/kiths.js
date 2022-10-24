const Kith = require("../models/kith");

module.exports = {
  index,
  new: newPerson,
  create,
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
  console.log(req.body);
  const kith = new Kith(req.body);
  kith.glutenFree = !!req.body.glutenFree;
  kith.nutFree = !!req.body.nutFree;
  kith.dairyFree = !!req.body.dairyFree;
  kith.vegetarian = !!req.body.vegetarian;
  kith.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect("/kith");
  });
}
