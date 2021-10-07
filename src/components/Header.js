import React from "react";
import logo from "../images/onedonate.svg";

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center pt-4 pb-8 mt-4 sm:mt-12">
        <div className="py-1">
          <img
            className="h-8 w-auto sm:h-10"
            src={logo}
            alt="Onedonate logo"
          ></img>
        </div>
      </nav>
    </header>
  );
};

export default Header;
