import { NavBrand } from "./Logo.styles";

import logo from "assets/logo.png";

const Logo = () => {
  return (
    <NavBrand>
      <img src={logo} alt="Nav-brand" />

      <h3>LAB WORKFLOW EDITOR</h3>
    </NavBrand>
  );
};

export default Logo;
