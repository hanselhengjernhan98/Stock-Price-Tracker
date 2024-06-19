import React from "react";

const SearchBox = (props) => {
  return (
    <div classname="col col-sm-4">
      <input
        className="SearchBox"
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder="type your stock here"
      ></input>
    </div>
  );
};

export default SearchBox;
