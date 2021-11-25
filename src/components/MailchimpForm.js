import React, { useState } from "react";
import Button from "./Button";
import addToMailchimp from "gatsby-plugin-mailchimp";

const MailchimpForm = ({ placeholder, type }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    setMessage(result.msg);
  };

  return (
    <div className="w-full flex flex-row gap-4 flex-wrap lg:flex-nowrap">
      <input
        className="px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-brand-blue rounded-md border-gray-400 shadow-md w-full"
        type={type}
        placeholder={placeholder}
        value={email}
        onChange={handleInputChange}
      ></input>
      <Button text="Sign up" onClick={handleSubmit}></Button>
    </div>
  );
};

export default MailchimpForm;
