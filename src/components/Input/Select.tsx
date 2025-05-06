import React, { useState, useRef, useEffect } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  placeholder?: string;
  options: Option[];
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: "default" | "ghost";
  className?: string;
  id?: string;
  description?: string;
  error?: boolean;
  errorMessage?: string;
}

const Select = ({
  label,
  placeholder = "Select an option",
  options,
  value,
  defaultValue,
  onChange,
  multiple = false,
  disabled = false,
  fullWidth = false,
  variant = "default",
  className = "",
  id,
  description,
  error,
  errorMessage,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [internalValue, setInternalValue] = useState<string | string[]>(
    defaultValue ?? (multiple ? [] : "")
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleSelect = (val: string) => {
    if (multiple) {
      const newValues = Array.isArray(currentValue)
        ? currentValue.includes(val)
          ? currentValue.filter((v) => v !== val)
          : [...currentValue, val]
        : [val];

      if (onChange) onChange(newValues);
      else setInternalValue(newValues);
    } else {
      if (onChange) onChange(val);
      else setInternalValue(val);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setIsOpen(true);
        setFocusedIndex(0);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev === null || prev === options.length - 1 ? 0 : prev + 1
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev === null || prev === 0 ? options.length - 1 : prev - 1
        );
        break;
      case "Enter":
        if (focusedIndex !== null) {
          handleSelect(options[focusedIndex].value);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!selectRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const containerStyles = `
    relative text-left ${fullWidth ? "w-full" : "w-64"} ${className}
  `;

  const triggerStyles = `
    w-full border rounded px-4 py-2 text-sm transition flex flex-wrap gap-2 items-center min-h-[2.5rem]
    ${disabled ? "bg-muted text-muted-foreground cursor-not-allowed" : ""}
    ${
      variant === "ghost"
        ? "bg-transparent border-transparent"
        : "bg-secondary border-input"
    }
    ${error ? "border-red-500" : ""}
  `;

  const optionStyles = (isFocused: boolean, isSelected: boolean) => `
    cursor-pointer px-4 py-2 text-sm transition flex justify-between items-center
    ${isFocused ? "bg-accent text-accent-foreground" : ""}
    ${isSelected ? "font-semibold text-primary" : ""}
  `;

  const renderSelected = () => {
    if (multiple && Array.isArray(currentValue)) {
      if (currentValue.length === 0) {
        return <span className="text-muted-foreground">{placeholder}</span>;
      }
      return currentValue.map((val) => {
        const option = options.find((o) => o.value === val);
        return (
          <span
            key={val}
            className="bg-primary text-white text-xs px-2 py-1 rounded-full flex items-center gap-1"
          >
            {option?.label ?? val}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(val);
              }}
              className="ml-1  text-white text-xl hover:text-red-300 focus:outline-none"
            >
              ×
            </button>
          </span>
        );
      });
    } else {
      const selectedOption = options.find((o) => o.value === currentValue);
      return (
        selectedOption?.label ?? (
          <span className="text-muted-foreground">{placeholder}</span>
        )
      );
    }
  };

  const isSelected = (val: string) => {
    return multiple && Array.isArray(currentValue)
      ? currentValue.includes(val)
      : currentValue === val;
  };

  return (
    <div className={containerStyles} ref={selectRef}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-primary mb-1"
        >
          {label}
        </label>
      )}

      <div
        tabIndex={0}
        className={triggerStyles}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {renderSelected()}
      </div>

      {isOpen && (
        <ul className="absolute z-50 mt-1 w-full bg-secondary border border-input rounded shadow-md max-h-60 overflow-auto">
          {options.length > 0 ? (
            options.map((option, i) => {
              const selected = isSelected(option.value);
              return (
                <li
                  key={option.value}
                  className={optionStyles(i === focusedIndex, selected)}
                  onClick={() => handleSelect(option.value)}
                  onMouseEnter={() => setFocusedIndex(i)}
                >
                  {option.label}
                  {selected && <span className="ml-auto text-xs">✔</span>}
                </li>
              );
            })
          ) : (
            <li className="px-4 py-2 text-sm text-muted-foreground">
              No options
            </li>
          )}
        </ul>
      )}

      {description && !error && (
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      )}

      {error && errorMessage && (
        <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default Select;
