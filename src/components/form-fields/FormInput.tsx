import { Input, InputProps } from "@/components/ui/input";
import { useFormContext, FieldValues, FieldPath } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";

interface FormInputProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder?: string;
  inputProps?: InputProps;
}

const FormInput = <TFieldValues extends FieldValues>({
  name,
  label,
  placeholder,
  inputProps,
}: FormInputProps<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} {...inputProps} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
