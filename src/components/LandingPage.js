import React from "react";
import Graphic from "./Graphic";
import Description from "./Description";
import Button from "./Button";
import TextInput from "./TextInput";
import graphic from "../images/landing-graphic.svg";

const LandingPage = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center max-w-7xl">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="font-bold text-brand-blue text-5xl md:text-4 lg:text-7xl text-center lg:text-left mb-6">
            Donating made simple
          </h2>
          <Description
            text="A centralized donation platform that empowers you to support all the
            causes that you care about. We aim to support over 86000 charities
            so you can research organizations, build your donation pie, and
            contribute to a better world all in one place."
          ></Description>
          <Description text="Sign up for updates today to get early access!"></Description>
          <div className="w-full flex flex-row gap-4 flex-wrap lg:flex-nowrap">
            <TextInput
              placeholder="Enter your email address"
              type="email"
            ></TextInput>
            <Button text="Sign up"></Button>
          </div>
        </div>

        <Graphic graphic={graphic}></Graphic>
      </div>
    </section>
  );
};

export default LandingPage;
