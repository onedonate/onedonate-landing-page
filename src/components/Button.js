import React from 'react';

const Button = ({ text, onClick, disable }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disable}
      className="bg-gray-600 hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:cursor-default shadow-md py-3 px-6 rounded-md transition duration-150 text-white w-full lg:w-36"
    >
      {text}
    </button>
  );
};

export default Button;
