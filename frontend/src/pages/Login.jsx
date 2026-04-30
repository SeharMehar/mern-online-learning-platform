import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    axios.post("http://localhost:3000/api/auth/login", {
      email,
      password
    }).then(res => {
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    });
  };

  return (
    <div>
      <h1>Login</h1>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />

      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default Login;