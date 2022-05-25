import Logo from "UI/atoms/Logo/Logo";
import { StyledNavbar, StyledNavLink, NavLink } from "./Navbar.styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <StyledNavLink to="/">Add New Workflow</StyledNavLink>
    </StyledNavbar>
  );
};

export default Navbar;
