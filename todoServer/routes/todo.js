const express = require("express");
const todo = require("./../models/todo");
const router = express.Router();

router.post("/add", (req, res) => {
  let result = Object.assign(
    {},
    {
      ...req.query,
      timeStamp: new Date().getTime(),
      completed: req.query.completed == "true"
    }
  );
  todo.create(result, (err, doc) => {
    if (err) console.log("error", err);
    console.log(doc);
  });
  res.json(result);
});

router.post("/edit", (req, res) => {
  let result = Object.assign(
    {},
    {
      ...req.query
    }
  );
  todo.updateOne(
    { id: req.param("id") },
    { $set: { remark: result.remark, text: result.text } },
    (err, raw) => {
      if (err) console.log("err", err);
    }
  );
  res.json(result);
});

router.post("/complete", (req, res) => {
  let result = Object.assign(
    {},
    {
      ...req.query,
      completed: true
    }
  );
  todo.updateOne(
    { id: req.param("id") },
    { $set: { completed: true } },
    (err, raw) => {
      if (err) console.log("err", err);
    }
  );
  res.json(result);
});

router.get("/list", (req, res) => {
  todo.find((err, doc) => {
    if (err) console.log("list error", err);
    res.status(200);
    res.json(doc);
  });
});

router.delete("/del", (req, res) => {
  todo.findOneAndRemove({ id: req.param("id") }, err => {
    if (err) console.log("remove", err);
  });
  res.status(200);
  res.json(req.query);
});

module.exports = router;
