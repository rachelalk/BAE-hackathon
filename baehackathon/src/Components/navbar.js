import React from "react";
import { Icon } from '@iconify/react';


const NavBar = () => {
  return (
    <div className="navbar">
      {/* <img className="logo" src={require("../bx_leaf.png")} alt="logo" /> */}
      <Icon className="logo"icon="bxs:leaf" />

      <h1>Green Steps</h1>
    </div>
  );
};

export default NavBar;
