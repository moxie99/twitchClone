import React from "react";
import Avatar from "@mui/material/Avatar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
          alt="twitch logo"
        />
        <h2>Following</h2>
        <h2>Browse</h2>
        <div className="header__verticalBar"></div>
        <h2>Esports</h2>
        <h2>Music</h2>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search" />
        <div className="header__centerInputIcon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="header__right">
        <div className="header__rightContainer">
          <i className="fa-solid fa-crown"></i>
          <i className="fa-solid fa-envelope-open"></i>
          <i className="fa-regular fa-message"></i>

          <div className="header__rightGem">
            <i class="fa-solid fa-gem"></i>
            <h5>Get Bits</h5>
          </div>
          <Avatar sx={{ bgcolor: "#2082dd" }} variant="circular" />
        </div>
      </div>
    </div>
  );
};

export default Header;
