import React from "react";
import Card from "./Card";
import icon1 from "../images/features-icon1.svg";
import icon2 from "../images/features-icon2.svg";
import icon3 from "../images/features-icon3.svg";

const Features = () => {
  return (
    <section className="bg-light-accent-gray py-20 mt-20">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-dark-blue uppercase">
          FEATURES
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Everything you need to make an impact
        </p>
      </div>

      <div className="container grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg">
        <Card
          icon={icon1}
          title="Improve your donation experience"
          description="A simple donation process that allows you to browse thousands of charities and be able to donate within seconds."
        ></Card>
        <Card
          icon={icon2}
          title="Donation Options"
          description="Provide options to donate once, recurring, and even to multiple charaties through a single donation."
        ></Card>
        <Card
          icon={icon3}
          title="Stress-free Tax Return"
          description="Never lose another charitable tax receipt again. Choose to view individual tax receipts or a summary tax receipt at the end of each year to easily recieve a donation tax credit."
        ></Card>
      </div>
    </section>
  );
};

export default Features;
