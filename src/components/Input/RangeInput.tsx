import React, { forwardRef } from "react";
import { variants, sizes } from "./TextInput";

interface RangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: keyof typeof variants;
  inputSize?: keyof typeof sizes;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
}

const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  (
    {
      className = "",
      label,
      variant = "default",
      inputSize = "md",
      fullWidth = false,
      disabled = false,
      error = false,
      errorMessage,
      id,
      ...props
    },
    ref
  ) => {
    const state = disabled ? "disabled" : error ? "error" : "default";
    const baseClasses = `${variants[variant][state]} ${sizes[inputSize]} ${
      fullWidth ? "w-full" : ""
    } ${className}`;

    const labelColor = error
      ? "text-red-600"
      : disabled
      ? "text-muted-foreground"
      : "text-primary";

    return (
      <div className={`flex flex-col gap-1 ${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label htmlFor={id} className={`text-sm font-medium ${labelColor}`}>
            {label}
          </label>
        )}
        <input
          type="range"
          ref={ref}
          id={id}
          disabled={disabled}
          className={`transition-all duration-200 ${baseClasses}`}
          {...props}
        />
        {error && errorMessage && (
          <p className="text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);

RangeInput.displayName = "RangeInput";

export default RangeInput;
