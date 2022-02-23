import React from "react";
import Question from "./Question";

const FAQ = () => {
  return (
    <section className="relative">
        <div className="container flex flex-1 flex-col items-left max-w-7xl mx-auto mt-12 md:mb-8 lg:items-start ">
            <h2 className="font-Montserrat font-extrabold text-dark-gray text-4xl text-left leading-extra-loose mb-8 md:text-4xl lg:text-5xl  lg:mb-12">FAQ.</h2>
            <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 md:gap-8">
                <Question question="What charities does Onedonate have on the platform?" answer="Onedonate supports all 86,000 registered charities in Canada." />
                <Question question="Can I make a donation to a non-Canadian charity?" answer="No, we currently only accept donations for registered Canadian charities that are listed on our platform. In the future, we do plan to expand to include international charities." />
                <Question question="Can I make donations to several charities at once?" answer="Yes, you can create a custom donation pie to give to all your favourite charities in a single donation. We also give you the ablity to share you pie with your friends and family so they can support the causes that are important to you." />
                <Question question="Can I trust the security of the Onedonate platform?" answer="We work hard to ensure that all user information is kept safe and secure by complying with the Personal Information Protection and Electronic Documents Act (PIPEDA). We will never share you personal information with any charity unless you ask us to." />
                <Question question="Can I donate from outside of Canada?" answer="Yes, Onedonate accepts international donations which is processed in local currency (Canadian Dollar)." />
                <Question question="How do I get a tax receipt for my monthly donations?" answer="Both individual and combined tax receipts can be found in the tax receipt summary under settings. Users will be able to access tax receipt by year for tax purposes." />
            </div>
        </div>
    </section>
  );
};

export default FAQ;
