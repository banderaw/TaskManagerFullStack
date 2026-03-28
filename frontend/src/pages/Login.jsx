import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ✅ LOGIN FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login/", {
        username,
        password,
      });

      // ✅ Save tokens
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);

      // ✅ Set token globally
      api.defaults.headers.Authorization = `Bearer ${res.data.access}`;

      // ✅ Redirect to home/tasks
      navigate("/");
    } catch (err) {
      console.log(err.response); // 🔥 helps debugging
      setError(err.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}