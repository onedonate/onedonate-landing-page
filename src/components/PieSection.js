import React from "react";
import Step from "./Step";

const PieSection = () => {
  return (
    <section className="relative block bg-gradient-to-t from-light-accent-gray to-transparent pb-24 md:pb-32">
      <div className="w-9/12 mx-auto">
        <h2 className="font-Montserrat font-extrabold text-dark-gray text-4xl text-center leading-extra-loose mb-2 md:text-4 lg:text-5xl  lg:mb-24">
          One donation, multiple impacts
        </h2>
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
    </section>
  );
};

export default PieSection;
