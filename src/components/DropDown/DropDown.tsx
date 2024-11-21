import React, { createContext, useContext, useState } from "react";

interface DropdownContextType {
  isOpen: boolean;
  selectedValue: string;
  toggle: () => void;
  close: () => void;
  onChange: (value: string) => void;
}

interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

interface TriggerProps {
  as: React.ReactNode;
}

interface MenuProps {
  children: React.ReactNode;
}

interface ItemProps {
  children: React.ReactNode;
}

interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown 컴포넌트 내부에서만 사용할 수 있습니다");
  }
  return context;
}

function Dropdown({ value, onChange, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        selectedValue: value,
        toggle,
        close,
        onChange,
      }}
    >
      <div className="relative inline-block w-full">{children}</div>
    </DropdownContext.Provider>
  );
}

function Trigger({ as }: TriggerProps) {
  const { toggle } = useDropdown();

  return (
    <div onClick={toggle} className="cursor-pointer">
      {as}
    </div>
  );
}

function Menu({ children }: MenuProps) {
  const { isOpen, close } = useDropdown();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0" onClick={close} />
      <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10">
        {children}
      </div>
    </>
  );
}

function Item({ children }: ItemProps) {
  const { onChange, close, selectedValue } = useDropdown();
  const isSelected = selectedValue === children;

  return (
    <button
      className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
        isSelected ? "bg-gray-100" : ""
      }`}
      onClick={() => {
        onChange(children as string);
        close();
      }}
    >
      {children}
    </button>
  );
}

function Modal({ children, className = "" }: ModalProps) {
  const { isOpen, close } = useDropdown();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50"
        onClick={close}
        aria-hidden="true"
      />
      <div
        className={`
        fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        bg-white rounded-lg shadow-xl z-50 
        w-full max-w-md p-6
        ${className}
      `}
      >
        {children}
      </div>
    </>
  );
}

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
Dropdown.Modal = Modal;

export default Dropdown;
