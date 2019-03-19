import React from "react";
import "./SearchBar.css";
import PropTypes from "prop-types";

//use i tags for styling elements in searchBar - italic type;

function SearchBar(props) {
  return (
    <div className="searchBar">
      <img
        className="instagram-namelogo"
        src="./instagram-font-name-5.png"
        alt="instagram logo/name"
      />
      <input
        type="text"
        placeholder="Search"
        onChange={props.inputHandler}
        value={props.input}
      />
      <div className="seachBarIcons">
        <img
          className="igIcons"
          src="./icons8-compass-32.png"
          alt="compass icon"
        />
        <img className="igIcons" src="./icons8-heart-30.png" alt="heart icon" />
        <img
          className="igIcons"
          src="./icons8-customer-32.png"
          alt="profile icon"
        />
      </div>
    </div>
  );
}

//checking correct data types;

SearchBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  )
};

export default SearchBar;
