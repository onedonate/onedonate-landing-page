import React from "react";

const Graphic = ({ graphic }) => {
  return (
    <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
      <img
        className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-72 md:h-full"
        src={graphic}
        alt="two excited characters using their electronic devices"
      ></img>
    </div>
  );
};

export default Graphic;
