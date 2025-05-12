import React from "react";

const variants = {
  default: "bg-muted peer-checked:bg-primary",
  ghost: "bg-muted  peer-checked:bg-primary",
};

const sizes = {
  sm: "w-9 h-5",
  md: "w-11 h-6",
  lg: "w-14 h-7",
};

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  fullWidth?: boolean;
  className?: string;
}

const Switch = ({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  name,
  value,
  label,
  variant = "default",
  size = "md",
  fullWidth = false,
  className = "",
}: SwitchProps) => {
  const baseSize = sizes[size];
  const isOn = checked ?? defaultChecked ?? false;

  const thumbTranslate =
    size === "sm"
      ? "translate-x-3.5"
      : size === "lg"
      ? "translate-x-7"
      : "translate-x-5";

  const thumbSize =
    size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4";

  const trackClasses = `${baseSize} relative inline-block rounded-full transition-colors duration-300 ${
    variants[variant]
  } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const thumbClasses = `absolute shadow-md top-1/2 left-1 bg-white rounded-full transform -translate-y-1/2 transition-transform duration-300 ease-in-out ${thumbSize} ${
    isOn ? thumbTranslate : "translate-x-0"
  }`;

  return (
    <div className="flex items-center gap-3">
      <label className="relative inline-block">
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          className="peer sr-only"
        />
        <div className={trackClasses}>
          <div className={thumbClasses} />
        </div>
      </label>
      {label && (
        <label htmlFor={id} className="text-sm text-primary font-medium">
          {label}
        </label>
      )}
    </div>
  );
};

export default Switch;
