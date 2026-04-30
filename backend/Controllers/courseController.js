const Course = require("../models/Course");

exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

exports.addCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
};