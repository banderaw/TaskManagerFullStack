import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  return (
    <nav>
      <div className="nav-left">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? "active" : ""}>Tasks</NavLink>
      </div>

      <div className="nav-right">
        {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}