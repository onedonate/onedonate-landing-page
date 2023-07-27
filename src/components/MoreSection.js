import React from "react";
import Graphic from "./Graphic";
import graphic from "../images/more-graphic.webp";
import Description from "./Description";
import { motion } from "framer-motion";

const MoreSection = () => {
  return (
    <section className="relative overflow-hidden pt-16" id="features">
      <div className="container flex flex-col lg:flex-row-reverse items-center mb-12 max-w-7xl lg:my-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: 50, opacity: 0 },
          }}
          className="flex flex-1 flex-col items-left lg:items-start"
        >
          <h2 className="font-Montserrat font-extrabold text-dark-gray text-4xl text-left leading-extra-loose mb-2 md:text-4 lg:text-5xl  lg:mb-6">
            Plus more ways to track, share, and save
          </h2>

          <Description text="The app makes donating effortless and serves as a centralized platform for tracking your impact, sharing on social media, and storing vital documents such as donation tax receipts."></Description>
          
        </motion.div>

        <Graphic graphic={graphic} width="128"></Graphic>
      </div>
    </section>
  );
};

export default MoreSection;
