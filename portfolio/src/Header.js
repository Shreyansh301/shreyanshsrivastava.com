import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="header_nav">
      <div className="header">
        <div className="header_logo_container">
          <img
            src="logo.png"
            alt="Logo"
            width={34}
            height={28}
            className="header_logo"
          />
        </div>
        <div className="header_name">Shreyansh Srivastava</div>
      </div>
    </nav>
  );
}

export default Header;
