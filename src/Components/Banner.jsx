import React from "react";
import { FaPlay } from "react-icons/fa";

function Banner() {
  return (
    <div className="banner">
      <div className="heading">
        <h1>STRANGER THINGS</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolore
          assumenda eaque totam odit perspiciatis autem rerum, quae quo deleniti
          molestiae iusto corrupti quas modi cupiditate, facere commodi
          exercitationem delectus.
        </p>
        <button className="btn">
          <FaPlay />
          <h4> PLAY</h4>
        </button>
      </div>
      <div className="shadow"></div>
      <video className="bg" width="100%" height="100%" autoPlay loop muted>
        <source
          src="https://raw.githubusercontent.com/orrin-temp/background-video/main/New%20Project.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Banner;
