import axios from "axios";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    axios.post("http://localhost:3000/api/auth/register", {
      name,
      email,
      password
    }).then(() => alert("Registered"));
  };

  return (
    <div>
      <h1>Register</h1>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />

      <button onClick={registerUser}>Register</button>
    </div>
  );
}

export default Register;