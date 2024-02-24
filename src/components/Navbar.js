import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="bar">
        <div className="icon">
          <CiSearch style={{ height: "30px", width: "30px" }} />
        </div>

        <input
          className="input"
          type="text"
          placeholder="Search here"
          onChange={" "}
          value={" "}
        />
      </div>

      <ul>
        <li>
          <Link to="categories">Categories</Link>
        </li>
        <li>
          <Link to="/websitebuilder">Website Builder</Link>
        </li>
        <li>
          <Link to="/todaysdeal">Today's Deal</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
