import React from "react";
import "./css/Footer.css";
import down from "../assets/images/down-arrow.png";
function Footer() {
  return (
    <div className="main">
      <div className="footer-content">
        <h1 className="heading">Categories</h1>
        <ul className="footer-links">
          <li>
            <a href="/">Web Builder</a>
          </li>
          <li>
            <a href="/about">Hosting</a>
          </li>
          <li>
            <a href="/about">Data Center</a>
          </li>
          <li>
            <a href="/contact">Robotic-Automation</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1 className="heading">Contact</h1>
        <ul className="content-links">
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/about">Privacy Policy</a>
          </li>
          <li>
            <a href="/about">Terms of Services</a>
          </li>
          <li>
            <a href="/contact">Categories</a>
          </li>
          <li>
            <a href="/contact">About</a>
          </li>
        </ul>
      </div>
      <h2>United States</h2>
      <div className="down-img ">
        <img src={down} alt="down-arrow"></img>
      </div>
    </div>
  );
}

export default Footer;
