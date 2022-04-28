import React from "react";
import logo from "../images/Logo.svg";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const DesktopNav = () => {
  return (
    <nav className="container flex justify-between items-center pt-1 pb-8 mt-4 px-4 lg:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        variants={{
          visible: { y: 0, opacity: 1, scale: 1 },
          hidden: { y: -20, opacity: 0, scale: 1 },
        }}
        className="py-1"
      >
        <img
          className="h-5 w-auto cursor-pointer md:h-6"
          src={logo}
          alt="Onedonate logo"
          onClick={scroll.scrollToTop}
        ></img>
      </motion.div>
      <ul className="flex items-center gap-4 md:gap-14">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <li type="button" className="cursor-pointer">
            About
          </li>
        </Link>
        <Link
          activeClass="active"
          to="features"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <li type="button" className="cursor-pointer">
            Features
          </li>
        </Link>
        <Link
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <li type="button" className="cursor-pointer">
            FAQ
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default DesktopNav;
