import { ObjectProps } from "context/types";

import { StyledCard, StyledLink } from "./Card.styles";

const Card: React.FC<{ datum: ObjectProps }> = ({ datum }) => (
  <StyledCard>
    <div>
      <h4>name: {datum.name}</h4>
      <span>version: {datum.version}</span>
      <span>scope: {datum.scope}</span>

      <span>apparatus: {JSON.parse(datum.apparatus).join(", ")}</span>
      <h4>definitions </h4>
      {JSON.parse(datum.definitions).map((definition: any, index: number) => (
        <p key={index}>
          {definition.name}: {definition.description}
        </p>
      ))}

      <StyledLink to={`${datum.id}`}>View Steps</StyledLink>
    </div>
  </StyledCard>
);

export default Card;
