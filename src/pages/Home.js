import React from "react";
import BgImage from '../assets/bgImage.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="headerContainer">
      </div>
    </div>
  );
}

export default Home;
