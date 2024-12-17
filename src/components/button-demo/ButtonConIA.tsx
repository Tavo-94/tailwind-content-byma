import React, { ReactNode } from "react";

// Definimos los tipos para las props del componente
interface ButtonProps {
  children: ReactNode; // El texto o contenido del botón
  iconLeft?: ReactNode; // Icono que aparece a la izquierda del texto
  iconRight?: ReactNode; // Icono que aparece a la derecha del texto
  variant?: "primary" | "secondary" | "tertiary"; // Variante del botón
  size?: "small" | "medium" | "large"; // Tamaño del botón
  onClick?: () => void; // Función de click
}

const ButtonConIA: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  variant = "primary", // Valor por defecto: primary
  size = "medium", // Valor por defecto: medium
  onClick,
}) => {
  // Definimos las clases de Tailwind basadas en las props
  const baseClasses = "flex items-center justify-center gap-2 font-semibold rounded-md transition-all";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-600 text-gray-700 hover:bg-gray-700",
    tertiary: "bg-transparent text-blue-500 hover:bg-blue-200",
  };
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {iconLeft && <span>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default ButtonConIA;
