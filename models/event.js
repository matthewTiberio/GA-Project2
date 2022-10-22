const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model("Event", eventSchema);

const eventSchema = new Schema({});
