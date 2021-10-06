import React from "react";
import graphic from "../images/landing-graphic.svg";

const LandingPage = () => {
  return (
    <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row items-center">
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2 class="font-bold text-accent-purple text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            Donating made simple
          </h2>
          <p class="text-accent-gray text-lg text-center lg:text-left mb-6">
            A centralized donation platform that empowers you to support{" "}
            <span class="underline italic">all</span> the causes that you care
            about. We aim to support over 86000 charities so you can research
            organizations, build your donation pie, and contribute to a better
            world all in one place.
          </p>
          <p class="text-accent-gray text-lg text-center lg:text-left mb-6">
            Sign up for updates today to get early access!
          </p>
        </div>

        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={graphic}
            alt="two excited characters using their electronic devices"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
