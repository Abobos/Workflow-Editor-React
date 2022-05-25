import {
  Caption,
  HeroContainer,
  Overlay,
  StyledHeroLink,
  StyledHeroText,
} from "./Hero.styles";

const HeroText = () => (
  <HeroContainer>
    <Overlay>
      <Caption>
        <StyledHeroText>
          <span className="first-line">Visualize Your Laboratory Steps</span>
          <br />
          <span className="second-line">Create Workflows</span>
          <br />
          <StyledHeroLink to="/" className="third-line">
            View Workflows
          </StyledHeroLink>
        </StyledHeroText>
      </Caption>
    </Overlay>
  </HeroContainer>
);

export default HeroText;
