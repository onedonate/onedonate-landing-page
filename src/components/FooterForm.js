import React from "react";
import MailchimpForm from "./MailchimpForm";

const FooterForm = ({ text }) => {
  return (
    <section className="relative">
      <div className="container w-4/5 py-8">
        <h3 className="text-center pb-4 text-brand-green font-bold text-lg">
          Sign up for our newsletter
        </h3>
        <MailchimpForm type="email"></MailchimpForm>
      </div>
    </section>
  );
};

export default FooterForm;
