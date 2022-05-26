import { ObjectProps } from "context/types";

import { StyledCard, StyledLink } from "./Card.styles";

const Card: React.FC<{ datum: ObjectProps }> = ({ datum }) => (
  <StyledCard>
    <div>
      <h4>Name </h4>
      {datum.name}
      <span>
        <b>Version</b>: {datum.version}
      </span>
      <span>
        <b>Scope:</b> {datum.scope}
      </span>

      <span>
        <b>Apparatus:</b> {JSON.parse(datum.apparatus).join(", ")}
      </span>
      <h4>Definitions </h4>
      {JSON.parse(datum.definitions).map((definition: any, index: number) => (
        <>
          <p key={index}>
            <b>{definition.name}:</b> {definition.description}
          </p>
          <br />
        </>
      ))}

      <StyledLink to={`${datum.id}`}>View Steps</StyledLink>
    </div>
  </StyledCard>
);

export default Card;
