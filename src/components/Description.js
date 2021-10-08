import React from "react";

const Description = ({ text }) => {
  return (
    <p className="text-accent-gray text-lg text-center lg:text-left mb-6">
      {text}
    </p>
  );
};

export default Description;
