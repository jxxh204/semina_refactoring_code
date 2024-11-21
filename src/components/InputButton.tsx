interface InputButtonProps {
  value: string;
  label?: string;
  onClick?: () => void;
}

const InputButton: React.FC<InputButtonProps> = ({ label, value, onClick }) => (
  <div>
    <p>{label}</p>
    <button
      onClick={onClick}
      className="w-full px-4 py-2 text-left border rounded-md bg-white flex justify-between items-center"
    >
      <span>{value}</span>
      <span>▼</span>
    </button>
  </div>
);

export default InputButton;
