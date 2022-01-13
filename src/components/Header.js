import React from "react";
import logo from "../images/Logo_optimized.svg";

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center pt-1 pb-8 mt-1 max-w-7xl sm:mt-4">
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
