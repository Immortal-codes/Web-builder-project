import React from "react";
import logo from "../../assets/images/187db358671328189d3da83955a6ffe9.png";
import "../css/Builder.css";
import star from "../../assets/images/IMAGE-7.png";
import show from "../../assets/images/IMAGE-3.png";
// import trophy from "../../assets/images/IMAGE-5.png";
import diamond from "../../assets/images/IMAGE-6.png";
function Builder() {
  return (
    <div className="build1-container">
      <div className="build1-main">
        <div className="orange-tag">
          <img className="trophy-img" src={diamond} alt="diamond-logo"></img>
          <p className="best-choice">Best Value</p>
        </div>
        <img className="pic" src={logo} alt="pic"></img>
        <p className="img-builder-heading"> Builder</p>
        <p className="description">
          <b>SiteCraft 68-Inch Ultimate Web Design Studio-</b> Advanced Site
          Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites
          and E-commerce Platforms (Green/White)
        </p>
        <b>
          <p className="highlight-heading">Main highlights</p>
        </b>
        <p className="highlight">
          [What You Get]: Gain access to the SiteCraft design studio, featuring
          a robust selection of design elements, SEO optimization tools, and
          e-commerce integrations.
        </p>

        <p className="show">show more</p>
        <p className="show-img">
          <img src={show} alt="show"></img>
        </p>

        <div className="box">
          <h1 className="number">9.8</h1>
          <h1 className="rating">Excelent</h1>
          <p>
            <img className="star-image" src={star} alt="star"></img>
          </p>
          <button>View</button>
        </div>
      </div>
    </div>
  );
}

export default Builder;
