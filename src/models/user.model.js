const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = model("user", courseSchema);
