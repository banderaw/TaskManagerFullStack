import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import './App.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "App dark" : "App"}>
        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <h1>🚀 My Task Manager</h1>

        {/* Dark Mode Toggle */}
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/login" element={<Login darkMode={darkMode} />} />
          <Route path="/register" element={<Register darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;