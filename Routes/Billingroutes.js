const express = require("express");
const route = express.Router();
const usercontroller = require("../controller/index");

route.get("/users", usercontroller.getallusers);
route.post("/createuser", usercontroller.postnewuser);
route.post("/getuser", usercontroller.finduser);

module.exports = route;
