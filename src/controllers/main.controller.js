const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
  try {
    res.render("index", {
      name: "jaskaran",
    });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
