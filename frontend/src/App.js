import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home = Courses */}
        <Route path="/" element={<Courses />} />

        {/* Students Page */}
        <Route path="/students" element={<Students />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;