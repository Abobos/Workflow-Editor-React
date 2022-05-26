import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  background-color: white;
  z-index: 900;
  padding: 3.5rem 2rem;

  @media screen and (min-width: 1200px) {
    justify-content: space-around;
    height: 10vh;
    padding: 0 4rem;
  }
`;

export const DesktopOnly = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  appearance: none;
  padding: 1rem 2rem;
  font-weight: 400;
  background-color: #fea700;
  color: white;
  border-radius: 50px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  appearance: none;
`;
