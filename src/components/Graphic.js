import React from "react";

const Graphic = ({ graphic, width, alt }) => {
  return (
    <div className="flex justify-center flex-1 my-10 md:my-16 lg:my-0">
      <img
        className={`w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-${width} md:h-full `}
        src={graphic}
        alt={alt}
      ></img>
    </div>
  );
};

export default Graphic;
