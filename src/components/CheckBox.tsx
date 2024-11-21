import Dropdown from "./DropDown/DropDown";

interface CheckBoxType {
  options: string[];
  onChange: (value: string) => void;
  defaultValue: string;
}

const Trigger = () => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
      선택하기
    </button>
  );
};

function CheckBox({ options, onChange, defaultValue }: CheckBoxType) {
  return (
    <Dropdown label={"checkbox"} value={defaultValue} onChange={onChange}>
      <Dropdown.Trigger as={<Trigger />} />
      <Dropdown.Modal>
        {options.map((option) => (
          <Dropdown.Item>{option}</Dropdown.Item>
        ))}
      </Dropdown.Modal>
    </Dropdown>
  );
}

export default CheckBox;
