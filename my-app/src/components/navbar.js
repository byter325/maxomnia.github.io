import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li className="navitem">
          <Link to="/">Maxomnia</Link>
        </li>
        <li className="navitem">
          <Link to="/guides">Guides</Link>
        </li>
        <li style={{ float: "right", overflow: "hidden" }}>
          <Link to="https://www.github.com/maxomnia">
            GitHub
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
