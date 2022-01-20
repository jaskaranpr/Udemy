const express = require("express");

const router = express.Router();

const Course = require("../models/course.model");

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
router.post("", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).send(course);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
