import React from "react";
import Question from "./Question";

const FAQ = () => {
  return (
    <section className="relative">
      <div className="container flex flex-1 flex-col items-left max-w-7xl mx-auto mt-12 md:mb-8 lg:items-start ">
        <h2 className="font-Montserrat font-extrabold text-dark-gray text-4xl text-left leading-extra-loose mb-8 md:text-4xl lg:text-5xl  lg:mb-12">
          FAQ.
        </h2>
        <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 md:gap-8">
          <Question
            question="What is Onedonate?"
            answer="At Onedonate, we are building a platform to help Canadians make an impact by giving them the power to change the world by giving as little or as much as they can. We are reimagining what it means to donate by making the process simple, smart, and effective for everyone."
          />
          <Question
            question="What charities does Onedonate have on the platform?"
            answer="Onedonate supports all 86,000 registered charities in Canada."
          />
          <Question
            question="Can I make a donation to a non-Canadian charity?"
            answer="No, we currently only accept donations for registered Canadian charities that are listed on our platform. In the future, we do plan to expand to include international charities."
          />
          <Question
            question="Can I donate from outside of Canada?"
            answer="Yes, Onedonate accepts international donations which is processed in local currency (Canadian Dollar)."
          />
          <Question
            question="What are the fees for donating with Onedonate?"
            answer="1.9% of your donation goes towards Onedonate to enable us to continue to build new and innovate in the donation space. The platform fees will go towards covering hosting cost and cost to operate. 

            2% + 30¢ payment processing fee which goes towards our payment partner, Stripe.
            
            Your full donation amount is eligible for a donation tax receipt.
            "
          />
          <Question
            question="Do I get a tax receipt for my donation made on Onedonate?"
            answer="Onedonate issues a tax receipt for 100% of your donation made on the platform."
          />
          <Question
            question="How do I get a tax receipt for my monthly donations?"
            answer="Both individual and combined tax receipts can be found in the tax receipt summary under settings. Users will be able to access tax receipt by year for tax purposes."
          />
          <Question
            question="I’d like to donate to a charity, but I’d like to decide what personal information they will receive."
            answer="We will never share your personal information with any third party or charity unless you ask us to. "
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
