import axios from "axios";
import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");

  // Fetch students + courses
  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/students");
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/courses");
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Enroll student in course
  const enrollStudent = async () => {
    if (!studentId || !courseId) {
      alert("Please select student and course");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/students/enroll",
        {
          studentId,
          courseId,
        }
      );

      alert(res.data.msg || "Enrolled successfully");

      // refresh data
      fetchStudents();
    } catch (err) {
      console.log(err);
      alert("Error enrolling student");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Students Management</h1>

      {/* STUDENTS LIST */}
      <h2>All Students</h2>
      <div>
        {students.length === 0 ? (
          <p>No students found</p>
        ) : (
          students.map((s) => (
            <div
              key={s._id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "5px",
              }}
            >
              <h3>{s.name}</h3>
              <p>{s.email}</p>

              {s.enrolledCourses?.length > 0 && (
                <p>
                  Enrolled Courses: {s.enrolledCourses.length}
                </p>
              )}
            </div>
          ))
        )}
      </div>

      <hr />

      {/* ENROLL SECTION */}
      <h2>Enroll Student in Course</h2>

      {/* Student Dropdown */}
      <select
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      >
        <option value="">Select Student</option>
        {students.map((s) => (
          <option key={s._id} value={s._id}>
            {s.name}
          </option>
        ))}
      </select>

      {/* Course Dropdown */}
      <select
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="">Select Course</option>
        {courses.map((c) => (
          <option key={c._id} value={c._id}>
            {c.title}
          </option>
        ))}
      </select>

      <button
        onClick={enrollStudent}
        style={{
          marginLeft: "10px",
          padding: "5px 10px",
        }}
      >
        Enroll
      </button>
    </div>
  );
}

export default Students;