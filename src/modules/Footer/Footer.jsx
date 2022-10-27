import React from "react";
import Container from "shared/components/Container";
import Logo from "shared/components/Logo";

import SocialList from "./components/SocialList";
import Form from "./components/Form";

import backgroundIcon from "assets/icons/Footer/01_footer.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer
      className="footer"
      id="contact"
      style={{ backgroundImage: `url(${backgroundIcon})` }}
    >
      <Container className="footer__container">
        <div>
          <Logo />
          <p className="footer__logo-text">You know what you choose!</p>
        </div>

        <p className="footer__privacy-policy">Privacy Policy</p>
        <SocialList />
        <Form />
      </Container>
    </footer>
  );
};

export default Footer;
