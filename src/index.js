const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../views")));

app.get("/", (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname, "..views/index.html"));
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log("done");
});
