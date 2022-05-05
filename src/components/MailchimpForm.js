import React, { useState } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const MailchimpForm = ({ type }) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [buttonText, setButtonText] = useState('Subscribe');
  const [disabled, setDisabled] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [placeholder, setPlaceholder] = useState('Enter your email address');
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email, {
      CONSENT: consent ? 'YES' : 'NO',
    });

    if (result.result === 'success') {
      setButtonText('Subscribed!');
      setSubmitted(true);
      setDisabled(true);
    } else {
      setPlaceholder(result.msg);
      setError(true);
      setEmail('');
    }
  };

  return (
    <div>
      <Checkbox
        setChecked={(e) => {
          setConsent(!consent);
          setDisabled(consent);
        }}
        checked={consent}
        label={
          'Yes, send me the Onedonate newsletter and other communications by email. I understand that I may unsubscribe at any time.'
        }
        disabled={submitted}
      ></Checkbox>
      <div className="w-full flex flex-row gap-2 flex-wrap lg:flex-nowrap">
        <input
          className={`disabled:text-gray-400 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-brand-blue rounded-md border-gray-400 shadow-md w-full ${
            error ? 'placeholder-red-500' : 'placeholder-gray-500'
          }`}
          type={type}
          placeholder={placeholder}
          value={email}
          onChange={handleInputChange}
          disabled={submitted}
        ></input>
        <Button
          text={buttonText}
          onClick={handleSubmit}
          disable={disabled}
        ></Button>
      </div>
    </div>
  );
};

export default MailchimpForm;
