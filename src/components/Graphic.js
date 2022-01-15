import React from "react";

const Graphic = ({ graphic, width }) => {
  return (
    <div className="flex justify-center flex-1 my-10 md:my-16 lg:my-0">
      <img
        className={`w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-${width} md:h-full `}
        src={graphic}
        alt="two excited characters using their electronic devices"
      ></img>
    </div>
  );
};

export default Graphic;
