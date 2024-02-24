import React from "react";
import "../css/RelatedDeals.css";
import pc from "../../assets/images/187db358671328189d3da83955a6ffe9.png";
function RelatedDeals() {
  return (
    <div className="realted-container">
      <div className="related-img">
        <img className="related-img" src={pc} alt="pc"></img>
      </div>
      <div className="top-discount-bg">
        <div className="top-discount">20% Off</div>
      </div>
      <div className="limited-time-bg">
        <div className="limited-time">Limited time </div>
      </div>

      <div className="web-heading">Webbuilder 1</div>
      <div className="para">Computer Modern clasic with wix support</div>
      <div className="price">$39.96</div>
      <div className="price-49">$49.96</div>
      <div className="red-discount">(20% Off)</div>
      <div className="btn">
        <button className="view-btn">View Deal</button>
      </div>
    </div>
  );
}

export default RelatedDeals;
