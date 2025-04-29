import React, { forwardRef } from "react";

const variants = {
  default: {
    default:
      "border-3 border-primary rounded-lg hover:bg-secondary focus:outline-primary focus:outline-2 placeholder:text-primary-foreground",
    error:
      "border-3 border-red-500 rounded-lg hover:bg-red-100 opacity-75 focus:outline-red-500 focus:outline-2 placeholder:text-red-400",
    disabled:
      "border-3 border-gray-300 rounded-lg bg-muted text-muted-foreground cursor-not-allowed placeholder:text-muted-foreground",
  },
  ghost: {
    default:
      "rounded-lg hover:bg-secondary focus:outline-primary focus:outline-2 placeholder:text-primary-foreground",
    error:
      "rounded-lg hover:bg-red-100 opacity-75 focus:outline-red-500 focus:outline-2 placeholder:text-red-400",
    disabled:
      "rounded-lg bg-muted text-muted-foreground cursor-not-allowed placeholder:text-muted-foreground",
  },
  underlined: {
    default:
      "border-b-3 border-primary rounded-[2px] hover:bg-secondary focus:outline-0 placeholder:text-primary-foreground",
    error:
      "border-b-3 border-red-500 rounded-[2px] hover:bg-red-100 opacity-75 focus:outline-0 placeholder:text-red-400",
    disabled:
      "border-b-3 border-gray-300 rounded-[2px] bg-muted text-muted-foreground cursor-not-allowed placeholder:text-muted-foreground",
  },
};

const sizes = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-3",
};

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

export interface InputProps {
  size?: keyof typeof sizes;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "search"
    | "checkbox"
    | "radio"
    | "tel"
    | "url"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color"
    | "range"
    | "file";
  variant?: keyof typeof variants;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  id?: string;
  name?: string;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  required?: boolean;
  multiple?: boolean;
  accept?: string;
  options?: Array<{ value: string; label: string }>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      type = "text",
      variant = "default",
      size = "md",
      placeholder,
      label,
      disabled,
      error,
      errorMessage,
      icon,
      iconPosition = "left",
      fullWidth = false,
      value,
      defaultValue,
      onChange,
      checked,
      defaultChecked,
      id,
      name,
      min,
      max,
      step,
      required,
      multiple,
      accept,
      options,
      readOnly,
      ...rest
    },
    ref
  ) => {
    const isCheckboxOrRadio = type === "checkbox" || type === "radio";
    const isRadioGroup = type === "radio" && options && options.length > 0;

    const state = disabled ? "disabled" : error ? "error" : "default";

    const styleVariant = isCheckboxOrRadio
      ? checkboxRadioVariants[variant][state]
      : variants[variant][state];

    const sizeClass = isCheckboxOrRadio
      ? checkboxRadioSizes[size]
      : sizes[size];

    const renderInput = () => {
      if (isRadioGroup && options) {
        return (
          <div className="flex flex-col gap-2">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  ref={index === 0 ? ref : undefined}
                  type="radio"
                  id={`${id || name}-${index}`}
                  name={name}
                  value={option.value}
                  disabled={disabled}
                  checked={value === option.value}
                  defaultChecked={defaultValue === option.value}
                  onChange={onChange}
                  className={`${checkboxRadioVariants[variant][state]} ${checkboxRadioSizes[size]} cursor-pointer`}
                  required={required}
                  readOnly={readOnly}
                  {...rest}
                />
                <label
                  htmlFor={`${id || name}-${index}`}
                  className={`${
                    disabled
                      ? "text-muted-foreground"
                      : "text-primary-foreground"
                  } cursor-pointer`}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );
      }

      if (isCheckboxOrRadio) {
        return (
          <div className="flex items-center gap-2">
            <input
              ref={ref}
              type={type}
              disabled={disabled}
              className={`${styleVariant} ${sizeClass} ${className}`}
              id={id || name}
              name={name}
              checked={checked}
              defaultChecked={defaultChecked}
              onChange={onChange}
              required={required}
              readOnly={readOnly}
              {...rest}
            />
            {label && (
              <label
                htmlFor={id || name}
                className={`${
                  error
                    ? "text-red-600"
                    : disabled
                    ? "text-muted-foreground"
                    : "text-primary-foreground"
                } cursor-pointer`}
              >
                {label}
              </label>
            )}
          </div>
        );
      }

      return (
        <>
          {label && !isCheckboxOrRadio && (
            <label
              htmlFor={id || name}
              className={`${
                error
                  ? "text-red-600"
                  : disabled
                  ? "text-muted-foreground"
                  : "text-primary"
              } mb-1.5 block`}
            >
              {label}
            </label>
          )}
          <div className="relative">
            {icon && iconPosition === "left" && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                {icon}
              </div>
            )}
            <input
              ref={ref}
              type={type}
              disabled={disabled}
              placeholder={placeholder ?? ""}
              className={`
              transition-all active:scale-[0.98] duration-200
              ${styleVariant}
              ${sizeClass}
              ${fullWidth ? "w-full" : ""}
              ${icon && iconPosition === "left" ? "pl-10" : ""}
              ${icon && iconPosition === "right" ? "pr-10" : ""}
              ${className}
            `}
              id={id || name}
              name={name}
              value={value}
              defaultValue={defaultValue}
              onChange={onChange}
              min={min}
              max={max}
              step={step}
              required={required}
              multiple={multiple}
              accept={accept}
              readOnly={readOnly}
              {...rest}
            />
            {icon && iconPosition === "right" && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {icon}
              </div>
            )}
          </div>
        </>
      );
    };

    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        {renderInput()}
        {errorMessage && error && (
          <p className="mt-1 text-red-500 text-sm">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
