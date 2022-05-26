import FacebookLogo from "assets/social/facebook.svg";

import LinkedInLogo from "assets/social/linkedin.svg";

import TwitterLogo from "assets/social/twitter.svg";

import InstagramLogo from "assets/social/instagram.svg";
import { StyledFooter } from "./Footer.styles";

const Footer = () => (
  <StyledFooter>
    <div>
      <a href="https://www.labforward.com" target="_blank" rel="noreferrer">
        <img src={LinkedInLogo} alt="linkedin-logo" />
      </a>

      <a href="https://www.labforward.com" target="_blank" rel="noreferrer">
        <img src={TwitterLogo} alt="twitter-logo" />
      </a>

      <a href="https://www.labforward.com" target="_blank" rel="noreferrer">
        <img src={InstagramLogo} alt="instagram-logo" />
      </a>

      <a href="https://www.labforward.com" target="_blank" rel="noreferrer">
        <img src={FacebookLogo} alt="facebook-logo" />
      </a>
    </div>

    <div>
      <p>
        2022 Lab Workflow Editor. All rights reserved -
        <a href="https://www.labforward.com"> Privacy Policy</a>
      </p>
    </div>
  </StyledFooter>
);

export default Footer;
