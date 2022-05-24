import React from "react";

function Search({handleUserInput}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" className="prompt" onChange={handleUserInput}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
