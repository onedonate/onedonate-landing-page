import React from "react";
import Card from "./Card";
import icon1 from "../images/features-icon1.svg";
import icon2 from "../images/features-icon2.svg";
import icon3 from "../images/features-icon3.svg";

const Features = () => {
  return (
    <section className="bg-light-accent-gray py-20 mt-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg">
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
