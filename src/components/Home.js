import React from "react";
import Builder from "./builder/Builder";
import Builder1 from "./builder/Builder1";
import Builder2 from "./builder/Builder2";
import Cdk from "./builder/Cdk";
import "./css/Home.css";
import tick from "../assets/images/IMAGE.png";
import icon from "../assets/images/IMAGE-2.png";
import img3 from "../assets/images/IMAGE-3.png";
import vector from "../assets/images/Vector.png";
import RelatedDeals from "./builder/RelatedDeals";

function Home() {
  return (
    <div className="home-main-body">
      <div className="home-container"></div>
      <div className="heading-div">
        <h1 className="home-heading">Best Website builders in the US</h1>
      </div>

      <hr className="top-line"></hr>

      <div className="tools">
        <ul className="tools-ul">
          <li>
            <img src={tick} alt="tick"></img>
          </li>
          <li className="tools-li">Last Updated</li>
          <li>-</li>
          <li className="tools-li">February 22, 2020</li>
          <li>
            <img src={icon} alt="tick"></img>
          </li>
          <li className="tools-li">Advertising Disclosure</li>
          <li className="tools-li top-relevant">Top Relevant</li>
          <li>
            <img className="tools-li top-relevant" src={img3} alt="img3"></img>
          </li>
        </ul>
      </div>

      <hr className="bottom-line"></hr>

      <div className="builder-div">
        <ul className="builder-ul">
          <li className="builder-li">Tools</li>
          <li className="builder-li">AWS Builder</li>
          <li className="builder-li">Start Build</li>
          <li className="builder-li">Build Supplies</li>
          <li className="builder-li">Tooling</li>
          <li className="builder-li">BlueHosting</li>
        </ul>
      </div>

      <div className="hosting">
        <ul className="hosting-ul">
          <li className="hosting-li">Home</li>
          <li className="hosting-li vector-img">
            <img src={vector} alt="vector"></img>
          </li>
          <li className="hosting-li">Hosting for all</li>
          <li className="hosting-li vector-img">
            <img src={vector} alt="vector"></img>
          </li>
          <li className="hosting-li">Hosting</li>
          <li className="hosting-li vector-img">
            <img src={vector} alt="vector"></img>
          </li>
          <li className="hosting-li">Hosting6</li>
          <li className="hosting-li vector-img">
            <img src={vector} alt="vector"></img>
          </li>
          <li className="hosting-li">Hosting5</li>
        </ul>
      </div>

      <div className="builder-component-div">
        <ul className="builder-component-ul">
          <li className="builder-component-li">
            <Builder1 />
          </li>
          <li className="builder-component-li">
            <Builder />
          </li>
          <li className="builder-component-li">
            <Builder2 />
          </li>
          <li className="builder-component-li">
            <Cdk />
          </li>
        </ul>
      </div>

      <div className="related-deals">
        <h1 className="realted-heading">Related deals you might like for</h1>
        <div className="deals">
          <ul className="related-deals-ul">
            <li className="related-deals-li">
              <RelatedDeals />
            </li>
            <li className="related-deals-li">
              <RelatedDeals />
            </li>
            <li className="related-deals-li">
              <RelatedDeals />
            </li>
          </ul>
        </div>
      </div>
      <div className="lastdiv">
        <p className="Signup-para">Sign up and get exclusive special deals</p>
        <div className="sign-btn">
          <div className="btn-search"></div>
          <p className="sign-btn-para">Sign Up</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
