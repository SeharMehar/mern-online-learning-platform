const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

router.post("/", async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json(course);
});

router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

module.exports = router;