import React from "react";
import graphic from "../images/landing-graphic.svg";

const LandingPage = () => {
  return (
    <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row items-center">
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2 class="font-bold text-brand-purple text-5xl md:text-4 lg:text-7xl text-center lg:text-left mb-6">
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
          <div class="w-full flex flex-row gap-4 flex-wrap lg:flex-nowrap">
            <input
              class="px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-brand-purple rounded-md border-gray-400 shadow-md w-full"
              type="text"
              placeholder="Enter your email address"
            ></input>
            <button
              type="button"
              class="hover:bg-gray-700 shadow-md py-3 px-6 rounded-md transition duration-150 bg-gray-600 text-white"
            >
              Sign up
            </button>
          </div>
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
