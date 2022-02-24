import React from "react";
import logo from "../images/Logo.svg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center pt-1 pb-8 mt-1 max-w-7xl sm:mt-4">
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
            className="h-6 w-auto md:h-8"
            src={logo}
            alt="Onedonate logo"
          ></img>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
