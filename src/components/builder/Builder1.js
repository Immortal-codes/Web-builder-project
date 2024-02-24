import React from "react";
import logo from "../../assets/images/187db358671328189d3da83955a6ffe9.png";
import "../css/Builder1.css";
import star from "../../assets/images/IMAGE-4.png";
import show from "../../assets/images/IMAGE-3.png";
import trophy from "../../assets/images/IMAGE-5.png";
function Builder1() {
  return (
    <div className="build1-container">
      <div className="build1-main">
        <div className="orange-tag">
          <img className="trophy-img" src={trophy} alt="img-5"></img>
          <p className="best-choice">Best Choice</p>
        </div>
        <img className="pic" src={logo} alt="pic"></img>
        <p className="img-builder-heading"> Builder 1</p>
        <p className="description">
          <b> WixPro 72-Inch Responsive Website Builder-</b> Comprehensive
          Digital Platform Creation Tool, Streamlined Design Interface for
          Professional Websites and Online Stores (Black/Blue)
        </p>
        <b>
          <p className="highlight-heading">Main highlights</p>
        </b>
        <p className="highlight">
          [What You Get]: Receive the WixPro website builder suite, access to
          premium design templates, an extensive library of widgets and apps,
          and detailed step-by-step guides.
        </p>

        <p className="show">show more</p>
        <p className="show-img">
          <img src={show} alt="show"></img>
        </p>

        <div className="box">
          <h1 className="number">9.8</h1>
          <h1 className="rating">Exceptional</h1>
          <p>
            <img className="star-image" src={star} alt="star"></img>
          </p>
          <button>View</button>
        </div>
      </div>
    </div>
  );
}

export default Builder1;
