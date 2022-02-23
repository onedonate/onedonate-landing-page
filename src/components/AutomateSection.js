import React from "react";
import Graphic from "./Graphic";
import graphic from "../images/automate-graphic.webp";
import Description from "./Description";
import { motion } from "framer-motion";

const AutomateSection = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col lg:flex-row-reverse items-center mb-12 max-w-7xl lg:my-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { x: 0, opacity: 1, scale: 1 },
            hidden: { x: 300, opacity: 0, scale: 0.9 },
          }}
          className="flex flex-1 flex-col items-left lg:items-start"
        >
          <h2 className="font-Montserrat font-extrabold text-dark-gray text-4xl text-left leading-extra-loose mb-2 md:text-4 lg:text-5xl  lg:mb-6">
            Automate your donating
          </h2>

          <Description text="Link your bank account to the app, use your credit or debit card to make everyday purchases, and your spare change is magically donated to a cause you want to support!"></Description>
        </motion.div>

        <Graphic graphic={graphic} width="128"></Graphic>
      </div>
    </section>
  );
};

export default AutomateSection;
