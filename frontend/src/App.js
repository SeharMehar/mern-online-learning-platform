import { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div>
      <h1>Courses</h1>

      {courses.map(course => (
        <div key={course._id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;