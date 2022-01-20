const express = require("express");
const app = express();

const mainController = require("./src/controllers/main.controller");
const courseController = require("./src/controllers/course.controller");
const cartController = require("./src/controllers/cart.controller");
const loginController = require("./src/controllers/login.controller");
const signupController = require("./src/controllers/signup.controller");
const maincatController = require("./src/controllers/mainCat.controller");
const subcatController = require("./src/controllers/subCat.controller");
const tagsController = require("./src/controllers/tag.controller");
const courseData = require("./src/controllers/course.data.controller")

app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", mainController);
app.use("/courses", courseController);
app.use("/cart", cartController);
app.use("/login", loginController);
app.use("/signup", signupController);
app.use("/maincategory", maincatController);
app.use("/subcategory", subcatController);
app.use("/tags", tagsController);
app.use("/coursedata",courseData)


app.listen(3000, async () => {
  await require("./src/configs/dp")();
  console.log("done");
});
