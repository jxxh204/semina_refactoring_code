import React from "react";
import { useState } from "react";
import InputButton from "./InputButton";
import Button from "./Button";

// Custom Hook for boolean state
function useBoolean(initial = false) {
  const [state, setState] = useState(initial);
  return [state, () => setState(true), () => setState(false)] as const;
}

const Options: React.FC<{
  onClose: () => void;
  children: React.ReactNode;
}> = ({ children, onClose }) => (
  <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg">
    {children}
  </div>
);

function ReactFrameworkSelect({ defaultValue = "", label = "" }) {
  const [isOpen, open, close] = useBoolean();
  const [selected, change] = useState(defaultValue);

  const options = ["Next.js", "Remix", "Gatsby", "Relay"];

  return (
    <div className="relative w-[300px]">
      <InputButton label={label} value={selected} onClick={open} />
      {isOpen ? (
        <Options onClose={close}>
          {options.map((value) => (
            <Button
              key={value}
              selected={selected === value}
              onClick={() => {
                change(value);
                close();
              }}
            >
              {value}
            </Button>
          ))}
        </Options>
      ) : null}
    </div>
  );
}

export default ReactFrameworkSelect;
