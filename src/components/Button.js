import React from "react";

const Button = ({ text }) => {
  return (
    <button
      type="button"
      className="hover:bg-gray-700 shadow-md py-3 px-6 rounded-md transition duration-150 bg-gray-600 text-white w-32"
    >
      {text}
    </button>
  );
};

export default Button;
