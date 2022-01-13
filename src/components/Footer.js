import React from "react";
import SocialLink from "./SocialLink";
import logo from "../images/Logo_optimized.svg";
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
          <SocialLink
            link="https://linkedin.com"
            icon={linkedin}
            alt="LinkedIn Link"
          />
          <SocialLink
            link="https://twitter.com/one_donate"
            icon={twitter}
            alt="Twitter Link"
          />
          <SocialLink
            link="https://instagram.com/onedonate"
            icon={ig}
            alt="Instagram Link"
          />
          <SocialLink
            link="https://tiktok.com"
            icon={tiktok}
            alt="TikTok Link"
          />
        </div>
        <div className="text-light-text-gray mt-4">
          Copyright 2021 All Rights Reserved - Onedonate
        </div>
      </div>
    </section>
  );
};

export default Footer;
