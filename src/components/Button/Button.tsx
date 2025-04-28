import React from "react";
import LoadingSpinner from "../LoadingSpinner";

const variants = {
  primary: " bg-primary hover:brightness-120 border-none text-white ",
  secondary: " text-primary border-primary hover:bg-secondary ",
  disabled: " border-muted text-muted opacity-50 cursor-not-allowed",
  ghost: " text-primary border-none  hover:bg-secondary",
  destructive: " bg-red-600 hover:brightness-140 border-none text-white",
};
interface IButtonProps {
  variant?: keyof typeof variants;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  children,
  loading,
  className,
  onClick,
}: IButtonProps) => {
  return (
    <button
      disabled={variant === "disabled" || loading}
      onClick={onClick}
      className={` flex justify-center items-center transition-all  px-4 py-2 border-[2px] rounded-lg ${variants[variant]} ${className}`}
    >
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
};
export default Button;
