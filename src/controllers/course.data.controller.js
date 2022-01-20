const express = require("express");

const router = express.Router();

const Course = require("../models/course.model");

router.get("", async (req, res) => {
  try {
    const course = await Course.find().lean().exec();
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
