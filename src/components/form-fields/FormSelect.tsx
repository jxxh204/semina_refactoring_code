import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

interface FormSelectProps {
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const FormSelect = ({ label, options, placeholder }: FormSelectProps) => {
  return (
    <>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            <SelectSeparator />
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default FormSelect;
