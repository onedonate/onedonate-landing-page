import React from "react";
import Step from "./Step";
import { motion } from "framer-motion";
import divider from "../images/divider2.png";
import MoreSection from "../components/MoreSection";

const PieSection = () => {
  return (
    <section className="relative block bg-gradient-to-t from-light-accent-gray to-transparent pb-24 md:pb-32">
      <img className="" src={divider} alt="Divider"></img>
      <div className="w-9/12 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.7 }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { y: 0, opacity: 1, scale: 1 },
            hidden: { y: -100, opacity: 0, scale: 0.9 },
          }}
        >
          <h2 className="font-Montserrat font-extrabold text-dark-gray text-4xl text-center leading-extra-loose mb-2 md:text-4 lg:text-5xl  lg:mb-24">
            One donation, multiple impacts
          </h2>
        </motion.div>

        <Step
          number="1"
          title="Discover charities"
          info="Through our discovery system, easily find and add your favourite charities to your donation pie."
          arrow="true"
        />
        <Step
          number="2"
          title="Adjust allocation"
          info="Customize your pie to choose what percentage of your donation goes to what charity."
          arrow="true"
        />
        <Step
          number="3"
          title="Make a single donation"
          info="Choose your donation amount and the amount will be automatically split to each charity based on your pie."
        />
      </div>
      <MoreSection />
    </section>
  );
};

export default PieSection;
