const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: String,
  id: String,
  completed: Boolean,
  remark: String,
  timeStamp: Number
});

const todo = mongoose.model("todo", todoSchema);

module.exports = todo;
