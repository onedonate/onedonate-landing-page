import React from "react";
import logo from "../images/Logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center pt-1 pb-8 mt-1 max-w-7xl sm:mt-4">
        <div className="py-1">
          <img
            className="h-6 w-auto md:h-8"
            src={logo}
            alt="Onedonate logo"
          ></img>
        </div>
      </nav>
    </header>
  );
};

export default Header;
