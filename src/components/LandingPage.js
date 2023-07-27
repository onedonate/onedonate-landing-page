import React from "react";
import Graphic from "./Graphic";
import Description from "./Description";
import MailchimpForm from "./MailchimpForm";
import graphic from "../images/landing-graphic.webp";

const LandingPage = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col lg:flex-row items-center max-w-7xl pt-40">
        <div className="flex flex-1 flex-col items-left lg:items-start">
          
          <h1 className="font-Montserrat font-extrabold text-primary1 text-4xl text-left leading-extra-loose mb-2 md:text-4 lg:text-7xl  lg:mb-6">
            Donating <p className="italic">made simple</p>
          </h1>

          <Description text="Your chance to join Onedonate."></Description>
          <Description
            text="Start donating with as little as $1 or 
donate your spare change from everyday purchases to thousands of charities. Join the community and start making an impact today."
          ></Description>
          <Description text="Sign up for our app newsletter to receive the latest updates, exclusive offers, and exciting news directly to your inbox."></Description>
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
