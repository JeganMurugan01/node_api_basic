const express = require("express");
const route = express.Router();
const usercontroller = require("../controller/index");
const { validateAccessToken } = require("../validation");


route.get("/users", usercontroller.getallusers);
route.post("/createuser", usercontroller.postnewuser);
route.post("/getuser", validateAccessToken,usercontroller.finduser);

module.exports = route;
