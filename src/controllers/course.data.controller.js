const express = require("express");

const router = express.Router();

const Course = require("../models/course.model");

const { uploadSingle, uploadMultiple } = require("../middlewares/upload");

router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).lean().exec();
    res.status(200).send(course);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const course = await Course.find()
      .skip(20)
      .limit(10)
      .populate({
        path: "created_by",
        select: { fname: 1 },
      })
      .populate({
        path: "tag",
        select: { name: 1 },
        populate: {
          path: "subCat",
          select: { name: 1 },
          populate: { path: "mainCat", select: { name: 1 } },
        },
      })
      .lean()
      .exec();
    res.status(200).send(course);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.post("", uploadSingle("thumbnails"), async (req, res) => {
  try {
    console.log(req.body, req.file);
    const course = await Course.create({
      title: req.body.title,
      created_by: "61e984e9590ad7b17ba54c6a",
      price: req.body.price,
      thumbnails: req.file.path,
      creater_name: req.body.creater_name,
      original_price: req.body.original_price,
      duration: req.body.duration,
      lecture: req.body.lecture,
      description: req.body.description,
      level: req.body.level,
      video: req.body.video,
      tag: req.body.tag,
    });
    res.status(201).send(course);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
