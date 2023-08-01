const express = require("express");
const bodyParser = require("body-parser");
const { dbcon } = require("./config/dbconfig");
const Routerpath=require('./Routes/Billingroutes.js')
const app = express();
app.use(bodyParser.json());

app.use("/api", Routerpath);
dbcon.getConnection((err, res) => {
    if (err) throw err;
    else console.log("db connection success ");
});

app.listen(3001);
