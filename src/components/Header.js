import React from "react";
import LogoImg from "../assets/logo.png";

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src={LogoImg} alt="logo" width="50px" className="logo" />
        <p>FavFood</p>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Order</a>
        <a href="#">About us</a>
      </nav>
    </div>
  );
}

export default Header;
