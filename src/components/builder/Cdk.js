import React from "react";
import logo from "../../assets/images/187db358671328189d3da83955a6ffe9.png";
import "../css/Cdk.css";
import star from "../../assets/images/IMAGE-cdk-star.png";
import show from "../../assets/images/IMAGE-3.png";
// import trophy from "../../assets/images/IMAGE-5.png";
import tik from "../../assets/images/tikimg.png";
function Cdk() {
  return (
    <div className="build1-container">
      <div className="build1-main">
        {/* <div className="orange-tag">
          <img className="trophy-img" src={trophy} alt="img-5"></img>
          <p className="best-choice">Best Choice</p>
        </div> */}
        <img className="pic" src={logo} alt="pic"></img>
        <p className="img-builder-heading">CDK</p>
        <p className="description">
          <b>CDK Resposive Builder:</b> An extensive library of widgets and
          apps, and detailed step-by-step guides
        </p>
        <div className="off-26"> 26% Off</div>
        <b>
          <p className="highlight-heading">Main highlights</p>
        </b>
        <div className="highlight-para-div">
          <div className="highlight-rating">9.9</div>
          <div className="highlight-rating">8.9</div>
          <div className="highlight-rating">8.9</div>
          <div className="higlight-para">building responsive</div>
          <div className="higlight-para">Cool</div>
          <div className="higlight-para">Docs</div>
        </div>

        <div className="why-we-love-it">
          <div className="why-we-heading">Why we love it</div>
          <div className="tick-img">
            <img src={tik} alt="tik"></img>
          </div>
          <div className="tick-img">
            <img src={tik} alt="tik"></img>
          </div>
          <div className="tick-img">
            <img src={tik} alt="tik"></img>
          </div>

          <div className="why-we-para">Documentation</div>
          <div className="why-we-para">Easy Use</div>
          <div className="why-we-para">Out of box</div>
        </div>

        <p className="show">show more</p>
        <p className="show-img">
          <img src={show} alt="show"></img>
        </p>

        <div className="cdk-box">
          <h1 className="number">9.1</h1>
          <h1 className="rating">Very Good</h1>
          <p>
            <img className="star-image" src={star} alt="star"></img>
          </p>
          <button className="cdk-btn">View</button>
        </div>
      </div>
    </div>
  );
}

export default Cdk;
