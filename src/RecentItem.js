import React from "react";
import "./RecentItem.css";

const RecentItem = ({ url, title }) => {
  return (
    <div>
      <div className="item">
        <iframe
          width="400"
          height="320"
          src={url}
          framborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen={true}
        ></iframe>
        <div className="items__details">
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1653572267~exp=1653572867~hmac=d22cf3d49b9fd0f89fe5e8424fe44dfa4bf4a5516082642fafd39360903b4a6c"
            alt="icon"
          />
          <div className="items_detail_desc">
            <h4>{title}</h4>
            <p>Tecchy girlll</p>
            <p>Coding and Programming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentItem;
