import React from "react";

const Card = ({ title }) => {
  return (
    <div className="flex flex-col rounded-md shadow-md">
      <div className="flex flex-col items-center">{title}</div>
    </div>
  );
};

export default Card;
