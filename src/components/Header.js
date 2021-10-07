import React from "react";
import logo from "../images/onedonate.svg";

const Header = () => {
  return (
    <header>
      <nav class="container flex items-center pt-4 pb-8 mt-4 sm:mt-12">
        <div class="py-1">
          <img class="h-8 w-auto sm:h-10" src={logo} alt="Onedonate logo"></img>
        </div>
      </nav>
    </header>
  );
};

export default Header;
