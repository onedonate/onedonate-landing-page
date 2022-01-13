import React from "react";
import Graphic from "./Graphic";
import graphic from "../images/automate-graphic.jpg";
import Description from "./Description";

const AutomateSection = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col lg:flex-row-reverse items-start my-16 max-w-7xl lg:my-32">
        <div className="flex flex-1 flex-col items-left lg:items-start">
          <h2 className="font-Montserrat font-extrabold text-dark-gray text-4xl text-left leading-extra-loose mb-2 md:text-4 lg:text-7xl  lg:mb-6">
            Automate your donating
          </h2>

          <Description text="Link your bank account to the app, use your credit or debit card to make everyday purchases, and your spare change is magically donated to a cause you want to support!"></Description>
        </div>

        <Graphic graphic={graphic}></Graphic>
      </div>
    </section>
  );
};

export default AutomateSection;
