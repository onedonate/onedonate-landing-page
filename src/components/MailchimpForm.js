import React, { useState } from "react";
import Button from "./Button";
import addToMailchimp from "gatsby-plugin-mailchimp";

const MailchimpForm = ({ type }) => {
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Subscribe");
  const [disabled, setDisabled] = useState(false);
  const [placeholder, setPlaceholder] = useState("Enter your email address");
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email);

    if (result.result === "success") {
      setButtonText("Subscribed");
      setDisabled(true);
    } else {
      setPlaceholder(result.msg);
      setError(true);
      setEmail("");
    }
  };

  return (
    <div className="w-full flex flex-row gap-2 flex-wrap lg:flex-nowrap">
      <input
        className={`disabled:text-gray-400 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-brand-blue rounded-md border-gray-400 shadow-md w-full ${
          error ? "placeholder-red-500" : "placeholder-gray-500"
        }`}
        type={type}
        placeholder={placeholder}
        value={email}
        onChange={handleInputChange}
        disabled={disabled}
      ></input>
      <Button
        text={buttonText}
        onClick={handleSubmit}
        disable={disabled}
      ></Button>
    </div>
  );
};

export default MailchimpForm;
