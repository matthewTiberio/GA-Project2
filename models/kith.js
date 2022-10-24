const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model("Kith", kithSchema);

const kithSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  comment: String,
  glutenFree: Boolean,
  nutFree: Boolean,
  dairyFree: Boolean,
  vegetarian: Boolean,
});
