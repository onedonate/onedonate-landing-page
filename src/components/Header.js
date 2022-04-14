import React from "react";
import logo from "../images/Logo.svg";
import Button from "./Button";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <header>
      <nav className="container flex justify-between items-center pt-1 pb-8 mt-1 max-w-7xl sm:mt-4">
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
            className="h-5 w-auto md:h-6"
            src={logo}
            alt="Onedonate logo"
          ></img>
        </motion.div>
        <ul className="flex items-center gap-4 md:gap-14">
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
    </header>
  );
};

export default Header;
