import React from "react";
import { motion } from "framer-motion";

const Graphic = ({ graphic, width, alt }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.7 }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.9 },
      }}
      className="flex justify-center flex-1 my-10 md:my-16 lg:my-0"
    >
      <img
        className={`w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-${width} md:h-auto `}
        src={graphic}
        alt={alt}
      ></img>
    </motion.div>
  );
};

export default Graphic;
