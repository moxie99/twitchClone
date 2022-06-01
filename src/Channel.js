import React from "react";
import "./Channel.css";

const Channel = ({ avatar, name, followers }) => {
  return (
    <div className="channel">
      <div className="channel__details">
        <img src={avatar} alt="avatar" />
        <div className="channel__details__names">
          <p>{name}</p>
          <p>{followers}</p>
        </div>
        <div className="icon">
          <i className="fa-solid fa-compact-disc"></i>
        </div>
      </div>
    </div>
  );
};

export default Channel;
