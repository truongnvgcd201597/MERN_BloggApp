import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2 className="title">JW Blog</h2>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
