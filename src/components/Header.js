import React, { useState } from "react";

function Header({ isDarkMode, onDarkModeClick }){
return (
  <div className={"App " + (isDarkMode ? "Dark" : "Light")}>
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
    </div>
    )
}

export default Header; 

