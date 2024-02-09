import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/kwetsokgaladi/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/kwetso-ogodiseng-kgaladi1">
        <FaGithub />
      </a>
      
    </div>
  );
};

export default HeaderSocials;
