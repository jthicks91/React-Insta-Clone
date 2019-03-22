import React from "react";
import "./SearchBar.scss";
import PropTypes from "prop-types";

import igLogo from "./igLogo.png";
import igIcon from "./igIcon.png";
import heart from "./heart.png";
import post from "./post.png";
import user from "./user.png";

//use i tags for styling elements in searchBar - italic type;

const SearchBar = props => {
  return (
    <header className="searchBar">
      <div className="searchBarLogos">
        <img src={igIcon} className="icon" alt="Instagram Icon" />
        <img src={igLogo} className="logo" alt="Instagram Logo" />
      </div>

      <input
        type="text"
        name="searchCriteria"
        value={props.text}
        onChange={props.changed}
        placeholder=" Search"
      />

      <div className="searchBarIcons">
        <img src={post} alt="Make A Post" />
        <img src={heart} alt="View Photos You Liked" />
        <img src={user} alt="View Your Profile" />
      </div>
    </header>
  );
};
//checking correct data types;

SearchBar.propTypes = {
  props: PropTypes.object
};

export default SearchBar;
