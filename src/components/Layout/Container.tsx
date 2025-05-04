import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "full" | "none";
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "lg",
  padding = "md",
  className = "",
}) => {
  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    full: "max-w-full",
    none: "",
  };

  const paddingClasses = {
    none: "",
    xs: "px-2 py-1",
    sm: "px-4 py-2",
    md: "px-6 py-4",
    lg: "px-8 py-6",
    xl: "px-12 py-8",
  };

  return (
    <div
      className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
