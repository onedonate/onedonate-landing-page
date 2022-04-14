import React from "react";
import Graphic from "./Graphic";
import Description from "./Description";
import MailchimpForm from "./MailchimpForm";
import graphic from "../images/landing-graphic.webp";

const LandingPage = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col lg:flex-row items-center max-w-7xl pt-28">
        <div className="flex flex-1 flex-col items-left lg:items-start">
          <div className="bg-brand-green font-bold text-white text-sm px-3 py-1 tracking-wide rounded-full mb-2 w-max truncate">
            COMING SOON
          </div>
          <h1 className="font-Montserrat font-extrabold text-dark-gray text-4xl text-left leading-extra-loose mb-2 md:text-4 lg:text-7xl  lg:mb-6">
            Donating <p className="text-brand-green">made simple</p>
          </h1>

          <Description text="Your chance to join Onedonate."></Description>
          <Description
            text="Start donating with as little as $1 or 
donate your spare change from everyday purchases to thousands of charities. Join the community and start making an impact today."
          ></Description>
          <Description text="Join hundreds of other Canadians on the waitlist."></Description>
          <MailchimpForm type="email"></MailchimpForm>
        </div>

        <Graphic
          graphic={graphic}
          width="72"
          alt="Phone with Onedonate Home screen"
        ></Graphic>
      </div>
    </section>
  );
};

export default LandingPage;
