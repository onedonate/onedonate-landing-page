import React from "react";
import Card from "./Card";

const Features = () => {
  return (
    <section className="bg-light-accent-gray py-20 mt-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg">
        <Card title="Hello"></Card>
        <Card title="HI"></Card>
        <Card title="Hey"></Card>
      </div>
    </section>
  );
};

export default Features;
