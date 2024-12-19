interface ButtonProps {
    label: string
    variant?: 'primary' | 'secondary' | 'success' | 'danger'
    onClick: () => void
    className?: string
}

const variantClasses = {
    primary:
        'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50',
    secondary:
        'bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-gray-500 focus:ring-opacity-50',
    success:
        'bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-green-500 focus:ring-opacity-50',
    danger: 'bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-opacity-50',
}

const TailwindButton: React.FC<ButtonProps> = ({
    label,
    variant = 'primary',
    onClick,
    className,
}) => {
    return (
        <button
            className={`rounded px-4 text-white focus:ring-2 focus:ring-offset-2 ${variantClasses[variant]} py-2 transition duration-300 ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default TailwindButton
