import React from "react";
import Graphic from "./Graphic";
import Description from "./Description";
import MailchimpForm from "./MailchimpForm";
import graphic from "../images/landing-graphic.svg";

const LandingPage = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center max-w-7xl">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="font-bold text-dark-blue text-5xl md:text-4 lg:text-7xl text-center lg:text-left mb-6">
            Donating made simple
          </h2>
          <Description
            text="A centralized donation platform that empowers you to support all the
            causes that you care about. We aim to support over 86000 charities
            so you can research organizations, build your donation pie, and
            contribute to a better world all in one place."
          ></Description>
          <Description text="Sign up for updates today to get early access! (You can unsubscribe at any time)"></Description>
          <MailchimpForm type="email"></MailchimpForm>
        </div>

        <Graphic graphic={graphic}></Graphic>
      </div>
    </section>
  );
};

export default LandingPage;
