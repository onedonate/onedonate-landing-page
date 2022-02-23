import React from "react";
import Description from "./Description";
import Arrow from "../images/arrow.svg";
import { motion } from "framer-motion";

const Step = ({ number, title, info, arrow }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.0 }}
      variants={{
        visible: { y: 0, opacity: 1, scale: 1 },
        hidden: { y: 100, opacity: 0, scale: 0.5 },
      }}
      className="grid grid-cols-1 gap-2 mt-24 md:grid-cols-2 md:gap-12"
    >
      <div className="text-left md:justify-end md:ml-auto md:w-4/6 md:text-right">
        <h3 className="text-brand-green font-bold uppercase text-lg">
          Step {number}
        </h3>
        <h2 className="font-Montserrat font-bold text-dark-gray text-3xl leading-extra-loose md:text-4 lg:text-5xl ">
          {title}
        </h2>
      </div>
      <div className="text-left md:w-4/6 md:mt-8">
        <Description text={info} />
      </div>
      {arrow ? (
        <div className="flex flex-wrap justify-start md:justify-end">
          <img src={Arrow} alt="Arrow"></img>
        </div>
      ) : null}
    </motion.div>
  );
};

export default Step;
