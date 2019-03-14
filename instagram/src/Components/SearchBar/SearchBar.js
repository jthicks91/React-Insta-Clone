import React from "react";
import "./SearchBar.css";
import IGLogo from "/Users/jordanhicks/Desktop/Projects/React-Insta-Clone/instagram/src/Assets/camera-logo.svg";

//use i tags for styling elements in searchBar - italic type;

const SearchBar = () => {
  return (
    <div className="wrapper-search-bar">
      <div className="wrapper-image">
        <img alt="instagram logo" src={IGLogo} className="image-logo" />
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="wrapper-social">
        <div className="social">
          <i />
        </div>
        <div className="social">
          <i />
        </div>
        <div className="social">
          <i />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
