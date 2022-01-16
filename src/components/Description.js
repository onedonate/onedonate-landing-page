import React from "react";

const Description = ({ text }) => {
  return (
    <p className="text-dark-gray text-md text-left lg: mb-6 lg:text-lg">
      {text}
    </p>
  );
};

export default Description;
