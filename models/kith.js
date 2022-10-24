const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kithSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  comment: String,
  glutenFree: Boolean,
  nutFree: Boolean,
  dairyFree: Boolean,
  vegetarian: Boolean,
});

module.exports = mongoose.model("Kith", kithSchema);
