import React from "react";

const TextInput = ({ placeholder, type }) => {
  return (
    <input
      className="px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-brand-purple rounded-md border-gray-400 shadow-md w-full"
      type={type}
      placeholder={placeholder}
    ></input>
  );
};

export default TextInput;
