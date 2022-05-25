import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const StyledHero = styled.div``;

export const StyledHeroText = styled.h1``;

const moveInTop = keyframes`
  0% {
      opacity: 0;
      transform: translateY(-10rem);
    }
  
    50% {
    opacity: 1;
    transform: translateY(.6rem);
  }
    
  
  100% {
      opacity: 1;
      transform: translateY(0.4rem);
    }
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const HeroContainer = styled.div`
  background-image: url("https://media.istockphoto.com/photos/modern-medical-research-laboratory-portrait-of-latin-and-black-young-picture-id1346675639");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  width: 100%;
  position: relative;
`;

export const Caption = styled.div`
  animation: ${moveInTop} 3s cubic-bezier(0.5, 0, 0.5, 1);
  transform: translateY(-2rem);

  & .first-line {
    line-height: 50px;
    color: #cfa670;
    font-size: 70px;
    font-weight: 200;
    margin-bottom: 10px;
  }
  & span {
    display: inline-block;
    margin-bottom: 10px;
  }
  & .second-line {
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 7px;
    font-size: 170%;
  }
  & .third-line {
    font-size: 80%;
  }
`;

export const StyledHeroLink = styled(Link)`
  text-decoration: none;
  appearance: none;

  padding: 1rem 2rem;
  font-weight: 400;
  border: 3px solid #fea700;

  background-color: #fea700;
  border: none;
  color: white;

  border-radius: 50px;
`;
