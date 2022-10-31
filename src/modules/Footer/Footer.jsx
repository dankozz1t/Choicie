import React from "react";
import PropTypes from "prop-types";

import Container from "shared/components/Container";
import Logo from "shared/components/Logo";

import SocialList from "./components/SocialList";
import Form from "./components/Form";

import Navigation from "modules/Header/components/Navigation";

import bgIcon from "assets/icons/Footer/01_footer.svg";
import bgMobileIcon from "assets/icons/Footer/01_mobile_footer.svg";

import navigationStyles from "./NavigationFooter.module.scss";
import "./Footer.scss";

const Footer = ({ navigationItems, isDesktop, isNavigation }) => {
  return (
    <footer
      className="footer"
      id="contact"
      style={{
        backgroundImage: `url(${isDesktop ? bgIcon : bgMobileIcon})`,
      }}
    >
      <Container className="footer__container">
        <div>
          <Logo />
          <p className="footer__logo-text">You know what you choose!</p>
        </div>

        <div className="footer__wrapper">
          {(!isDesktop || isNavigation) && (
            <div>
              <Navigation
                navigationItems={navigationItems}
                styles={navigationStyles}
              />
              <a
                href="https://en.wikipedia.org/wiki/Privacy_policy"
                className="footer__privacy-policy"
              >
                Privacy Policy
              </a>
            </div>
          )}

          {isDesktop && !isNavigation && (
            <a
              href="https://en.wikipedia.org/wiki/Privacy_policy"
              className="footer__privacy-policy"
            >
              Privacy Policy
            </a>
          )}
          <SocialList />
        </div>
        <Form />
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

export default Footer;
