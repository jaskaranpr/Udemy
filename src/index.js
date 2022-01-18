const express = require("express");
const app = express();

const mainController = require("./controllers/main.controller");
const courseController = require("./controllers/course.controller");
const cartController = require("./controllers/cart.controller");
const loginController = require("./controllers/login.controller");
const signupController = require("./controllers/signup.controller");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", mainController);
app.use("/courses", courseController);
app.use("/cart", cartController);
app.use("/login", loginController);
app.use("/signup", signupController);

app.listen(3000, () => {
  console.log("done");
});
