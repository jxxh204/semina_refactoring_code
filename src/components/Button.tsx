interface ButtonProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ selected, onClick, children }) => (
  <button
    onClick={onClick}
    className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
      selected ? "bg-gray-50" : ""
    }`}
  >
    {children}
  </button>
);

export default Button;
