interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

const variantClasses = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-500 hover:bg-gray-600 text-white",
  success: "bg-green-500 hover:bg-green-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const TailwindButton: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
}) => {
  return (
    <button
      className={`rounded px-4 py-2 ${variantClasses[variant]} transition duration-300`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TailwindButton;
