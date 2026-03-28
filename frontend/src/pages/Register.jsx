import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError("Passwords do not match");
      return;
    }
    try {
      await api.post("/register/", { username, password });
      alert("User registered successfully!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}