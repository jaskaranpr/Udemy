const { Schema, module } = require("mongoose");

const courseSchema = new Schema({
  title: { type: String, required: true },
  created_by: { type: Schema.Types.ObjectId, ref: "user", required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
});
