import React from "react";
import LoadingSpinner from "../FeedBack/LoadingSpinner";

const variants = {
  primary: " bg-primary hover:brightness-120 border-none  text-white",
  secondary: "  border-primary hover:bg-secondary text-primary",
  disabled:
    " border-muted  opacity-50 cursor-not-allowed text-muted-foreground ",
  ghost: "  border-none  hover:bg-secondary  text-primary",
  destructive: " bg-red-600 hover:brightness-140 border-none text-white ",
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
  disabled,
  variant = disabled ? "disabled" : "primary",
  type = "button",
  children,
  loading,
  className,
  onClick,
  size = "md",
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`relative flex min-h-10 justify-center items-center transition-all gap-2  border-[2px] rounded-lg  ${
        variants[variant]
      } ${sizes[size]} ${className} ${
        disabled || loading ? " " : "active:scale-[0.85]  duration-200"
      } `}
    >
      {loading && (
        <div className="absolute self-center ">
          <LoadingSpinner />
        </div>
      )}
      <div className={`${loading && "invisible"}`}> {children}</div>
    </button>
  );
};
export default Button;
