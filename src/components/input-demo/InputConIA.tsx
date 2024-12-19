import React, { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = {
    tamaño: 'small' | 'medium' | 'large'
    variant?: 'default' | 'error' | 'success'
    iconLeft?: ReactNode
    iconRight?: ReactNode
    label?: string
    errorMessage?: string
} & InputHTMLAttributes<HTMLInputElement>

const InputConIA: React.FC<InputProps> = ({
    tamaño = 'medium',
    variant = 'default',
    iconLeft,
    iconRight,
    label,
    errorMessage,
    className,
    ...props
}) => {
    // Clases de tamaño
    const sizeClasses = {
        small: 'py-2 px-3 text-sm',
        medium: 'py-3 px-4 text-base',
        large: 'py-4 px-5 text-lg',
    }

    // Clases de variantes (estado)
    const variantClasses = {
        default: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
        error: 'border-red-500 focus:ring-red-500 focus:border-red-500',
        success: 'border-green-500 focus:ring-green-500 focus:border-green-500',
    }

    // Clases combinadas
    const inputClasses = `w-full border rounded-md shadow-sm focus:outline-none ${sizeClasses[tamaño]} ${variantClasses[variant]} ${className}`

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <div className="relative mt-1">
                {iconLeft && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                        {iconLeft}
                    </div>
                )}
                <input
                    className={`w-full pl-10 pr-10 ${inputClasses}`}
                    {...props}
                />
                {iconRight && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
                        {iconRight}
                    </div>
                )}
            </div>
            {errorMessage && (
                <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
            )}
        </div>
    )
}

export default InputConIA
