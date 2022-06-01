import React from "react";
import RecentItem from "./RecentItem";

import "./Profile.css";

const videos = [
  {
    url: "https://videos.pond5.com/group-five-teenage-girls-run-footage-033309797_main_xxl.mp4",
    title: "Girls going out"
  },
  {
    url: "https://videos.pond5.com/group-five-teenage-girls-run-footage-033309797_main_xxl.mp4",
    title: "Girls going out"
  },
  {
    url: "https://videos.pond5.com/group-five-teenage-girls-run-footage-033309797_main_xxl.mp4",
    title: "Girls going out"
  },
  {
    url: "https://videos.pond5.com/group-five-teenage-girls-run-footage-033309797_main_xxl.mp4",
    title: "Girls going out"
  },
  {
    url: "https://videos.pond5.com/group-five-teenage-girls-run-footage-033309797_main_xxl.mp4",
    title: "Girls going out"
  },
  {
    url: "https://videos.pond5.com/group-five-teenage-girls-run-footage-033309797_main_xxl.mp4",
    title: "Girls going out"
  },
]

const Profile = () => {
  return (
  <div>
<div className="profile">
    <div className="profile__left">
      <img src="https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?t=st=1653572632~exp=1653573232~hmac=52f8fb461a56558afb12e9bbecfaac52139a5e364b03070086f618e84c5d5d48&w=1060" alt="" />
      <div>
        <h5>Tecchy Girl</h5>
        <h5>300k Followers || 200k Subscribers</h5>
      </div>
    </div>
    <div className="profile__right">
       <i class="fa-solid fa-video graybg"></i>
       <i class="fa-solid fa-heart graybg"></i>
       <i class="fa-solid fa-bell graybg"></i>
       
    </div>
    <div className="profile__menu">
      <h2 className="active">Home</h2>
      <h2>About</h2>
      <h2>Schedule</h2>
      <h2>Videos</h2>
      <h2><i class="fa-solid fa-arrow-up"></i></h2>
      <h2>Chat</h2>
    </div>
    <div className="profile__recent__broadcast">
      <h2>Recent Broadcast</h2>
      <div className="profile__broadcast">

         { 
           videos.map((video, index) => {
             return(
             <RecentItem key={index.toString()} url={video.url} title={video.title}/>)
           })
         }
      </div>
    </div>
    <div className="profile__category">
          <h2>Mathematics Classes</h2>
          <img src="https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h3>Junior Secondary Classes</h3>
        </div>
</div>
  </div>);
};

export default Profile;
