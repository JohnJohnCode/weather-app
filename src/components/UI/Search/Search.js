import React from "react";

import * as classes from "./Search.module.css";

const Search = (props) => {
  return (
    <input
      spellCheck="false"
      className={classes.Search}
      type="text"
      value={props.input}
      onChange={props.inputHandler}
    />
  );
};

export default Search;
