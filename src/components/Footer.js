import React from "react";

const Footer = () => {
  return (
    <section className="bg-back-blue py-10 mt-20 rounded-t-3xl">
      <div className="container grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-3 gap-x-40 max-w-7xl">
        <div className="flex flex-col items-left text-left text-large p-4">
          <div className="font-bold text-lg mb-2">Onedonate</div>
          <ul>A: Canada</ul>
          <ul>T: 403-671-7564</ul>
          <ul>E: onedonate@outlook.com</ul>
        </div>
        <div className="flex flex-col items-left text-left text-large p-4">
          <div className="font-bold text-lg mb-2">About</div>
          <ul>FAQ</ul>
          <ul>Careers</ul>
        </div>
        <div className="flex flex-col items-left text-left text-large p-4">
          <div className="font-bold text-lg mb-2">Resources</div>
          <ul>Terms and Conditions</ul>
          <ul>Privacy Policy</ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
