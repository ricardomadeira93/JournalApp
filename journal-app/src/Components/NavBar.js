import React from "react";
import logo from "../globe.png";
export default function NavBar() {
  return (
    <div>
      <div className="app--navbar">
        <img className="nav--logo" src={logo} />
        <p>my travel journal</p>
      </div>
    </div>
  );
}
