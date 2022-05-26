import { TextAreaField } from "./TextArea.styles";

type TextAreaProps = {
  name: string;
  content: string;
  placeholder: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  content,
  onChangeFunction,
}) => {
  return (
    <TextAreaField
      name={name}
      placeholder={placeholder}
      value={content}
      onChange={onChangeFunction}
      required
    />
  );
};

export default TextArea;
