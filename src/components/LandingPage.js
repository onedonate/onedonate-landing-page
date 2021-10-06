import React from "react";
import graphic from "../images/landing-graphic.svg";

const LandingPage = () => {
  return (
    <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row items-center">
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2 class="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            Donating made simple
          </h2>
          <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            To provide a simple centralized platform that will allow everyone to
            contribute, monitor, and see the impact their donations make on the
            world
          </p>
        </div>

        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={graphic}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
