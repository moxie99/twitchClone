import React from "react";
import Channel from "./Channel";
import "./Sidebar.css";
const SideBar = () => {
  return (
  <div className="sidebar">
      <div className="sidebar__top">
      <h5>FOLLOWED CHANNELS</h5>
        <Channel avatar= "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1653572267~exp=1653572867~hmac=d22cf3d49b9fd0f89fe5e8424fe44dfa4bf4a5516082642fafd39360903b4a6c" name="TecchyGirl" followers="48k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/technology-services-illustration_24877-52377.jpg?t=st=1653569636~exp=1653570236~hmac=c07c86e24ca1e63efb571d67d31cb90661f6f88b6ffbded4679897a7b6d44de8&w=1060" name="CindyQuash" followers="45k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg?w=1060" name="TechCrunch" followers="23k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1653572253~exp=1653572853~hmac=53e194481a0b70e2fe143322d8b92cdc0cc5cccf1dbc3be10175b79869059604&w=1060" name="TechMandy" followers="44k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/mafia-dog-character-with-hat_23-2148473393.jpg?t=st=1653553582~exp=1653554182~hmac=7d7d99ebb8c75a13f4d7223774cbcbb5bc2237691428aa2a23e79073bf02f573&w=1060" name="TechCruise" followers="50k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/bulldog-illustration-with-solid-color_232942-131.jpg?w=1060" name="CrunchMandy" followers="100k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1653572253~exp=1653572853~hmac=02866500da05cd358b534ef221ae1afd6c48c4bba05c4475e567d70916e83083&w=1060" name="NicheMaker" followers="80k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/farmer-using-technology-digital-agriculture_53876-113813.jpg?t=st=1653572253~exp=1653572853~hmac=32c24ce9c7740151ecaa63ae1e87b1c94a53d6eb4f13a6525fe6437d84777bf9&w=1060" name="RichMeteror" followers="40k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?t=st=1653572632~exp=1653573232~hmac=52f8fb461a56558afb12e9bbecfaac52139a5e364b03070086f618e84c5d5d48&w=1060" name="Thrifty" followers="200k"/>
      <h5>RECOMMENDED CHANNELS</h5>
      <Channel avatar= "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1653572267~exp=1653572867~hmac=d22cf3d49b9fd0f89fe5e8424fe44dfa4bf4a5516082642fafd39360903b4a6c" name="TecchyGirl" followers="48k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/technology-services-illustration_24877-52377.jpg?t=st=1653569636~exp=1653570236~hmac=c07c86e24ca1e63efb571d67d31cb90661f6f88b6ffbded4679897a7b6d44de8&w=1060" name="CindyQuash" followers="45k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg?w=1060" name="TechCrunch" followers="23k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1653572253~exp=1653572853~hmac=53e194481a0b70e2fe143322d8b92cdc0cc5cccf1dbc3be10175b79869059604&w=1060" name="TechMandy" followers="44k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/mafia-dog-character-with-hat_23-2148473393.jpg?t=st=1653553582~exp=1653554182~hmac=7d7d99ebb8c75a13f4d7223774cbcbb5bc2237691428aa2a23e79073bf02f573&w=1060" name="TechCruise" followers="50k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/bulldog-illustration-with-solid-color_232942-131.jpg?w=1060" name="CrunchMandy" followers="100k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1653572253~exp=1653572853~hmac=02866500da05cd358b534ef221ae1afd6c48c4bba05c4475e567d70916e83083&w=1060" name="NicheMaker" followers="80k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/farmer-using-technology-digital-agriculture_53876-113813.jpg?t=st=1653572253~exp=1653572853~hmac=32c24ce9c7740151ecaa63ae1e87b1c94a53d6eb4f13a6525fe6437d84777bf9&w=1060" name="RichMeteror" followers="40k"/>
        <Channel avatar= "https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?t=st=1653572632~exp=1653573232~hmac=52f8fb461a56558afb12e9bbecfaac52139a5e364b03070086f618e84c5d5d48&w=1060" name="Thrifty" followers="200k"/>
        <div class="sidebar__thumbnail">
            <p  className="sidebar__topShowMore">Show More</p>
        </div>

        <div className="sidebar__bottom">
            <div className="sidebar__bottomContainer">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search to add friends"/>
            </div>
        </div>
         </div>


  </div>
  );
};

export default SideBar;
