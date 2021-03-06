import React from 'react';
import './Search.css';
import PropTypes from 'prop-types';

const Search = (props) => {
  return (
    <div className="card-container">
      <form action="" className="district-form">
        <h1>Welcome to HeadCount 2.0</h1>
        <input
          type="text"
          className="district-input"
          placeholder="Search Districts"
          onChange={(event) => props.handleSearchEvent(event)}
        />
      </form>
      <hr />
    </div>
  );
};

Search.propTypes = {
  handleSearchEvent: PropTypes.func.isRequired
};



export default Search;