import React from "react";
import Graphic from "./Graphic";
import graphic from "../images/automate-graphic.webp";
import divider from "../images/divider.png";
import Description from "./Description";
import { motion } from "framer-motion";

const AutomateSection = () => {
  return (
    <section className="relative overflow-hidden" id="features">
      <img className="" src={divider} alt="Divider"></img>
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
