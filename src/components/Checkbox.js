import React from 'react';

const Checkbox = ({ label, checked, setChecked, disabled }) => {
  return (
    <div>
      <input
        className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        onChange={setChecked}
        id="flexCheckDefault"
        checked={checked}
        disabled={disabled}
      />
      <label
        className="cursor-pointer text-gray-800"
        htmlFor="flexCheckDefault"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
