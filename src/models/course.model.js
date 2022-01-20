const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    created_by: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnails: { type: String, required: true },
    creater_name: { type: String, required: true },
    original_price: { type: String, required: true },
    duration: { type: Number, required: true },
    lecture: { type: Number, required: true },
    description: { type: String, required: true },
    level: { type: String, required: true },
    video: { type: String, required: true },
    tags: { type: Schema.Types.ObjectId, required: true },
    delete: { type: Boolean, required: true, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("course", courseSchema);
