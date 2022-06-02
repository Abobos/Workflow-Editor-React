import { SelectField } from "./Select.styles";

type SelectProps = {
  name: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectOptions: string[];
};

const Select: React.FC<SelectProps> = ({
  name,
  onChangeFunction,
  selectOptions,
}) => {
  return (
    <SelectField name={name} onChange={onChangeFunction} multiple required>
      {selectOptions.map((selectOption, index) => (
        <option key={index} value={selectOption}>
          {selectOption}
        </option>
      ))}
    </SelectField>
  );
};

export default Select;
