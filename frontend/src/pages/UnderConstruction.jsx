import React from "react";
import "./Pages.css"; 
import { assets } from "../assets/assets";

const UnderConstruction = () => {
  return (
    <div className="status-page">
      {/* Left Section */}
      <div className="content-text">
        <h1 className="footerTitle">Construction on Site...</h1>
        <p>
          We are currently engaged in the construction of an extraordinary project, <br/>
          and we aske for your understanding as we navigate through the <br/>
          process. Kindly excuse and temporary disarray as we are actively <br/>
          working to bring our vision to fruition. <br/>
        </p><br/>
        <button className="btn-primary">Return to Homepage</button>
      </div>

      {/* Right Section */}
      <div className="status-right">
        <img src={assets.construction_on_site} alt="Construction on Site" />
      </div>
    </div>
  );
};

export default UnderConstruction;