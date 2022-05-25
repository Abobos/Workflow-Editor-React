import { StyledButton } from "./Button.styles";

export enum ButtonType {
  Submit = "submit",
  Reset = "reset",
  Button = "button",
}

interface ButtonProps {
  buttonType: ButtonType;
  text: string;
  disable: boolean;
}

const Button = ({ buttonType, text, disable }: ButtonProps) => (
  <StyledButton type={buttonType} disabled={disable}>
    {text}
  </StyledButton>
);

export default Button;
