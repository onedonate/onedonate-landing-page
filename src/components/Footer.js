import React from "react";
import logo from "../images/onedonate.svg";
import linkedin from "../images/linkedin-icon.svg";
import twitter from "../images/twitter-icon.svg";
import ig from "../images/ig-icon.svg";
import tiktok from "../images/tiktok-icon.svg";

const Footer = () => {
  return (
    <section className="bg-white border-t-2 border-light-gray pt-10 pb-2 mt-20">
      <div className="flex flex-col items-center py-1">
        <img
          className="h-8 w-auto sm:h-10"
          src={logo}
          alt="Onedonate logo"
        ></img>
        <div className="flex flex-row px-4 py-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img
              className="h-5 w-auto px-2.5"
              src={linkedin}
              alt="LinkedIn Link"
            ></img>
          </a>
          <a
            href="https://twitter.com/one_donate"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="h-5 w-auto px-2.5"
              src={twitter}
              alt="Twitter Link"
            ></img>
          </a>
          <a
            href="https://instagram.com/onedonate"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="h-5 w-auto px-2.5"
              src={ig}
              alt="Instagram Link"
            ></img>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <img
              className="h-5 w-auto px-2.5"
              src={tiktok}
              alt="TikTok Link"
            ></img>
          </a>
        </div>
        <div className="text-light-text-gray mt-4">
          Copyright 2021 All Rights Reserved - Onedonate
        </div>
      </div>
    </section>
  );
};

export default Footer;
