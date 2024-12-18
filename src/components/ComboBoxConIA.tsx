import React, { useState } from "react";

interface ComboBoxProps {
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({
  label,
  options,
  placeholder = "Seleccione una opción",
  value = "",
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [selectSize, setSelectSize] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <label
        htmlFor={label}
        className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        {label}
      </label>
      <select
        id={label}
        value={selectedValue}
        onChange={handleChange}
        size={selectSize}
        onFocus={(e) => {
          setSelectSize(2);
        }}
        onBlur={(e) => {
            setSelectSize(0);
        }}
        className="block max-h-36 w-full overflow-y-auto rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-300"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
