const express = require("express");
const Authlogin = require("../controller/Authcontroller");
const route = express.Router();

route.use("/login", Authlogin.Login);
route.use("/reftoken", Authlogin.refreshtoken);

module.exports = route;
