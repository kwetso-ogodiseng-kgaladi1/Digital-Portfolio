import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
//import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/kwetso-kgaladi-85b435267/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Kwetso-Ogodiseng-Kgaladi">
        <FaGithub />
      </a>
      {/* <a href="https://www.youtube.com/@howtobecomeadeveloper">
        <BsYoutube />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
