import React from "react";
import "./stream.css";

const Stream = () => {
  return (
  <div className="stream">
      <div className="stream__container">
          <div className="stream__status">
              <div className="stream__statusContainer">
                  <div className="stream__statusContainerTop">
                      <div className="stream__statusIndicator">OFFLINE</div>
                      <h2>Check out the streams below from my channels</h2>
                  </div>
                  <div className="stream__statusInfo">
                      <p>You will be notified when I am live</p>
                  </div>
              </div>
          </div>
          <div className="stream__videoEmbed">
              <iframe
                width="500px"
                height="327px"
                src="https://videos.pond5.com/colorful-fireworks-honor-holiday-free-footage-000512859_main_xxl.mp4"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen={true}
                ></iframe>
          </div>
      </div>
  </div>
  );
};

export default Stream;
