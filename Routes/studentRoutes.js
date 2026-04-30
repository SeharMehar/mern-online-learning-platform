const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.post("/", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

router.get("/", async (req, res) => {
  const students = await Student.find().populate("courses");
  res.json(students);
});

// Enrollment
router.post("/:id/enroll", async (req, res) => {
  const { courseId } = req.body;
  const student = await Student.findById(req.params.id);
  student.courses.push(courseId);
  await student.save();
  res.json(student);
});

module.exports = router;