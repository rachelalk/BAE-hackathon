import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={require("../bx_leaf.png")} alt="logo" />
      <h1>Green Steps</h1>
    </div>
  );
};

export default NavBar;
