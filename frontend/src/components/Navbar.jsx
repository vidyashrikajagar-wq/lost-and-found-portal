import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("user");

  const logout = () => {

    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/login");

  };

  return (

    <nav className="navbar">

      <div className="logo">

        🎒 Campus Lost & Found

      </div>

      <div className="links">

        {!isLoggedIn ? (

          <>

            <Link to="/">Home</Link>

            <Link to="/register">Register</Link>

            <Link to="/login">Login</Link>

          </>

        ) : (

          <>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/lostitems">Lost Items</Link>

            <Link to="/founditems">Found Items</Link>

            <button onClick={logout}>
              Logout
            </button>

          </>

        )}

      </div>

    </nav>

  );

}

export default Navbar;