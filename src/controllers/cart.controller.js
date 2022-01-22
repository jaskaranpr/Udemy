const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/authenticate");

const User = require("../models/user.model");

router.get("", (req, res) => {
  try {
    res.render("cart");
  } catch (err) {
    console.log(err);
  }
});

router.patch("/add", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).lean().exec();
    user.cat.push(req.body.cart);
    const userUp = await User.findByIdAndUpdate(req.user._id, user, {
      new: true,
    });

    return res.send(userUp);
  } catch (err) {
    console.log(err);
  }
});

router.get("/length", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).lean().exec();
    return res.status(200).send({
      length: user.cat.length,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
