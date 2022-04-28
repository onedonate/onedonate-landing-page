import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed bg-white z-50 h-12 w-full md:h-20 ${
        scrollPosition === 0 ? "" : "md:shadow-md"
      }`}
    >
      <DesktopNav />
    </header>
  );
};

export default Header;
