const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model("Event", eventSchema);

const menuSchema = new Schema({
  name: { type: String, required: true },
  madeBy: { type: Schema.Types.ObjectId },
  type: {
    type: String,
    enum: ["Appetizer", "First Course", "Entree", "Side/Salad", "Dessert"],
  },
  comment: String,
  glutenFree: Boolean,
  nutFree: Boolean,
  dairyFree: Boolean,
  vegetarian: Boolean,
});

const eventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: String,
  descr: String,
  host: { type: Schema.Types.ObjectId, ref: "Kith" },
  guests: [{ type: Schema.Types.ObjectId, ref: "Kith" }],
  menu: [menuSchema],
});
