import React from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "ghost" | "underlined";
  readOnly?: boolean;
  className?: string;
  label?: string;
}

const checkboxRadioVariants = {
  default: {
    default: "border-2 border-primary text-primary focus:ring-primary",
    error: "border-2 border-red-500 text-red-500 focus:ring-red-500",
    disabled:
      "border-2 border-gray-300 text-muted-foreground cursor-not-allowed",
  },
  ghost: {
    default: "border-2 border-primary text-primary focus:ring-primary",
    error: "border-2 border-red-500 text-red-500 focus:ring-red-500",
    disabled:
      "border-2 border-gray-300 text-muted-foreground cursor-not-allowed",
  },
  underlined: {
    default: "border-2 border-primary text-primary focus:ring-primary",
    error: "border-2 border-red-500 text-red-500 focus:ring-red-500",
    disabled:
      "border-2 border-gray-300 text-muted-foreground cursor-not-allowed",
  },
};

const checkboxRadioSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  disabled,
  error,
  required,
  size = "md",
  variant = "default",
  readOnly,
  className = "",
  label,
}) => {
  const state = disabled ? "disabled" : error ? "error" : "default";
  const baseClasses = `${checkboxRadioVariants[variant][state]} ${checkboxRadioSizes[size]} cursor-pointer`;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-lg font-medium text-primary">{label}</label>
      )}

      {options.map((option, index) => (
        <label
          key={index}
          htmlFor={`${name}-${index}`}
          className={`flex items-center gap-2 cursor-pointer ${
            disabled ? "text-muted-foreground" : "text-primary-foreground"
          }`}
        >
          <input
            type="radio"
            id={`${name}-${index}`}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            className={baseClasses}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
