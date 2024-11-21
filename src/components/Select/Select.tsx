import Dropdown from "../DropDown/DropDown";

interface SelectProps {
  trigger: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

function Select({ trigger, value, onChange, options }: SelectProps) {
  return (
    <Dropdown label={"labeeeel"} value={value} onChange={onChange}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item>{option}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Select;
