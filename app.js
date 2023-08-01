const express = require("express");
const bodyParser = require("body-parser");
const { dbcon } = require("./config/dbconfig");
const Routerpath=require('./Routes/Billingroutes.js')
const authroute=require('./Routes/Authrouter')
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());


app.use("/api",Routerpath);
app.use('/api/v1',authroute)

dbcon.getConnection((err, res) => {
    if (err) throw err;
    else console.log("db connection success ");
});

app.listen(3002);
