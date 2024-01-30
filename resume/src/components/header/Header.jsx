import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/header-picture2.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kwetso Ogodiseng Kgaladi</h1>
        <h5 className="text-light">Junior Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="kwetso">
          <img src={header_picture} alt="Kwetso Ogodiseng Kgaladi" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;