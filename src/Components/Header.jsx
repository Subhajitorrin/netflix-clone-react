import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="imgnavcontainer">
        <div className="imageContainer">
          <img src="netflixlogo.png" />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tvshows">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recentlyadded">Recently Added</Link>
          <Link to="/mylist">My List</Link>
        </nav>
      </div>
      <div className="searchcontainer">
        <FiSearch/>
      </div>
    </div>
  );
}

export default Header;
