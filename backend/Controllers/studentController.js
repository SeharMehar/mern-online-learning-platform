const Student = require("../models/Student");

exports.enroll = async (req, res) => {
  const { studentId, courseId } = req.body;

  const student = await Student.findById(studentId);

  student.enrolledCourses.push(courseId);

  await student.save();

  res.json({ msg: "Enrolled successfully" });
};