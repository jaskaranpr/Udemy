const express = require("express");

const Main = require("../models/mainCat.model");
const Sub = require("../models/subCat.model");
const Tag = require("../models/tags.model");
const Course = require("../models/course.model");

const router = express.Router();

router.get("", (req, res) => {
  try {
    res.render("product");
  } catch (err) {
    console.log(err);
  }
});
router.get("/:name", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;

    const total = (page - 1) * size;
    const main = await Main.findOne({ name: req.params.name }).lean().exec();

    const sub = await Sub.find({ mainCat: main._id });
    let courses = [];
    for (let i = 0; i < sub.length; i++) {
      let tag = await Tag.find({ subCat: sub[i]._id });
      for (let j = 0; j < tag.length; j++) {
        let course = await Course.find({ tag: tag[j]._id }).lean().exec();
        if (i == 0 && j == 0) {
          courses = course;
        } else courses.concat(course);
      }
    }
    return res.render("product", {
      data: courses.slice((page - 1) * size, page * size),
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/:name/:sub", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;

    const total = (page - 1) * size;
    const sub = await Sub.findOne({ name: req.params.sub });
    let courses = [];
    let tags = await Tag.find({ subCat: sub._id });
    for (let i = 0; i < tags.length; i++) {
      let course = await Course.find({ tag: tags[i]._id }).lean().exec();
      if (i == 0) {
        courses = course;
      } else courses.concat(course);
    }
    console.log(size, page);
    return res.render("product", {
      data: courses.slice((page - 1) * size, page * size),
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/:name/:sub/:tag", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;

    const total = (page - 1) * size;
    let tag = await Tag.findOne({ name: req.params.tag });
    let courses = await Course.find({
      tag: tag._id,
    })
      .populate("tag")
      .limit(size)
      .skip(total)
      .lean()
      .exec();
   
    return res.render("product", {
      data: courses,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
