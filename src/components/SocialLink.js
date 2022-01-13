import React from "react";

const SocialLink = ({ link, icon, alt }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img className="h-5 w-auto px-2.5" src={icon} alt={alt}></img>
    </a>
  );
};

export default SocialLink;
