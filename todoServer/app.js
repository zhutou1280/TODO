const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const todoRouter = require("./routes/todo");
const mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost:27017/todo", err => {
    if (err) {
        console.error("App starting error:", err.stack);
        process.exit(1);
    } else {
        console.log("Connection has been made");
    }
});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Mongoose connection open ");
});

db.on("error", err => console.log("Mongoose connection error" + err));
db.on("disconnected", _ => console.log("Mongoose connection disconnected"));

app.use(logger("dev"));
app.use(bodyParser.json()); // 使用中间件
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/todo", todoRouter);
app.use(express.static(path.join(__dirname, "public")));

app.listen(3500);
module.exports = app;
