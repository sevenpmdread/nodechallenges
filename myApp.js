var express = require('express');
var app = express();
const date = require("./routes/date")


app.use("/api/v1/",date)


app.use("/",(req,res)=>{
  res.sendStatus(502)
})





























 module.exports = app;
