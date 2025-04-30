import React, { forwardRef } from "react";
import { variants, sizes } from "./TextInput";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: keyof typeof variants;
  inputSize?: keyof typeof sizes;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  accept?: string;
  multiple?: boolean;
  required?: boolean;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
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
      accept = "/*",
      multiple,
      required = false,
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
          multiple={multiple}
          required={required}
          accept={accept}
          type="file"
          ref={ref}
          id={id}
          disabled={disabled}
          className={`file:mr-4 file:py-1.5 file:px-4 file:rounded file:border-0 file:bg-primary file:text-white hover:file:bg-primary/90 transition-all duration-200 ${baseClasses}`}
          {...props}
        />
        {error && errorMessage && (
          <p className="text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);

FileInput.displayName = "FileInput";

export default FileInput;
