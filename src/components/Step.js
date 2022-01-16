import React from "react";
import Description from "./Description";
import Arrow from "../images/arrow.svg";

const Step = ({ number, title, info, arrow }) => {
  const showing = arrow;

  return (
    <div className="grid grid-cols-1 gap-2 mt-24 md:grid-cols-2 md:gap-12">
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
      {showing ? (
        <div className="flex flex-wrap justify-start md:justify-end">
          <img src={Arrow} alt="Arrow"></img>
        </div>
      ) : null}
    </div>
  );
};

export default Step;
