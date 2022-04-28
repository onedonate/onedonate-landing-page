import React from "react";
import Graphic from "./Graphic";
import aboutImage from "../images/about_image.svg";

const About = () => {
  return (
    <section
      className="relative block bg-primary2 py-24 mt-32 mb-12 md:py-32"
      id="about"
    >
      <div className="flex items-center justify-center">
        <div className="w-3/4 flex flex-col items-center justify-center md:w-1/2">
          <h2 className="text-white text-4xl text-center font-Montserrat font-extrabold mb-6 md:text-6xl">
            We strive to <span className="text-primary1 italic">simplify</span>{" "}
            the donation process.
          </h2>
          <p className="text-white text-md text-center lg:mb-24 lg:text-xl">
            We envision a world where charities should not face technological
            barriers when helping others. We’re reimagining what it means to
            donate by making the process simple, smart, and effective for
            everyone.
          </p>
          <Graphic graphic={aboutImage} width="80" alt="In Thought" />
        </div>
      </div>
    </section>
  );
};

export default About;
