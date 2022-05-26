import { InputField } from "./Input.styles";

type InputProps = {
  name: string;
  content: string;
  placeholder: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  placeholder,
  content,
  onChangeFunction,
}) => {
  return (
    <InputField
      type={type}
      name={name}
      placeholder={placeholder}
      value={content}
      onChange={onChangeFunction}
      required
    />
  );
};

export default Input;
