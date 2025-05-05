import React from "react";
import LoadingSpinner from "../FeedBack/LoadingSpinner";

const variants = {
  primary:
    " bg-primary hover:brightness-120 border-none text-white  active:scale-[0.85] duration-200 ",
  secondary:
    " text-primary border-primary hover:bg-secondary  active:scale-[0.85]  duration-200 ",
  disabled:
    " border-muted text-muted-foreground opacity-50 cursor-not-allowed ",
  ghost:
    " text-primary border-none  hover:bg-secondary active:scale-[0.85]  duration-200 ",
  destructive:
    " bg-red-600 hover:brightness-140 border-none text-white active:scale-[0.85]  duration-200 ",
};
const sizes = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-3",
};

interface ButtonProps {
  variant?: keyof typeof variants;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
  size?: keyof typeof sizes;
  type?: "submit" | "button";
  disabled?: boolean;
}

const Button = ({
  variant = "primary",
  type = "button",
  children,
  loading,
  className,
  onClick,
  disabled,
  size = "md",
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={variant === "disabled" || loading}
      onClick={onClick}
      className={` flex justify-center items-center transition-all gap-2  border-[2px] rounded-lg ${
        disabled ? variants["disabled"] : variants[variant]
      } ${sizes[size]} ${className}`}
    >
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
};
export default Button;
