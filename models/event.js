const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: { type: String, required: true },
  madeBy: { type: Schema.Types.ObjectId, ref: "Kith" },
  type: {
    type: String,
    enum: [
      "Appetizer",
      "Salad",
      "First Course",
      "Entree",
      "Side Dish",
      "Dessert",
    ],
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
  guestList: [{ type: Schema.Types.ObjectId, ref: "Kith" }],
  menu: [menuSchema],
});

module.exports = mongoose.model("Event", eventSchema);
