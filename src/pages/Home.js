import React from "react";
import { Link } from "react-router-dom";
import BgImage from '../assets/bgImage.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="headerContainer">
        <h1>Live this life to its fullest.</h1>
        <Link to='/menu'>
          <button> Start Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
