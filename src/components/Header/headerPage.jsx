import React from "react";

const HeaderPage = () => {
  return (
    <div className="headerPage">
      <div>
        <div className="navbar">
          <div className="inner-width">
            <a href="/" className="logo"></a>
            <div className="navbar-menu">
              <a href="#about">About</a>
              <a href="#team">Team</a>
              <a href="#pricing">Pricing</a>
              <a href="#issues">Issues</a>
              <a href="#signin">Sign in</a>
              <img
                src="https://files-utility.s3.ap-south-1.amazonaws.com/Group+20.png"
                className="searchbarImage"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="headerContainer">
        <div className="headerMessage">
          <p className="headerTitle">
            Digital <br></br>marketing
          </p>
          <p className="headerContent1">
            {" "}
            Targeted and interactive<br></br> marketing of goods and services
          </p>
          <p> Sign up and get a discount</p>
          <img
            src="https://files-utility.s3.ap-south-1.amazonaws.com/Group+21.png"
            className="signupImage"
          />
        </div>
        <div>
          <img
            src="https://files-utility.s3.ap-south-1.amazonaws.com/Group+18.png"
            className="head-content-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
