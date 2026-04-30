import axios from "axios";
import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/courses")
      .then(res => setCourses(res.data));
  }, []);

  return (
    <div>
      <h1>Courses</h1>

      {courses.map(c => (
        <div key={c._id}>
          <h3>{c.title}</h3>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Courses;