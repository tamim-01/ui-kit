import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined" | "ghost";
  shadow?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
}

const variantClasses = {
  default: "bg-background border border-muted  hover:bg-accent",
  outlined: "bg-background border-2 border-primary  hover:bg-accent",
  ghost: "bg-transparent hover:bg-accent",
};

export const Card = ({
  children,
  className = "",
  variant = "default",
  shadow = false,
  rounded = true,
  fullWidth = false,
  ...props
}: CardProps) => {
  return (
    <article
      className={`
        transition-all duration-200
        ${variantClasses[variant]}
        ${shadow ? "shadow-md" : ""}
        ${rounded ? "rounded-lg" : ""}
        ${fullWidth ? "w-full" : "max-w-md"}
        ${className}
      `}
      {...props}
    >
      {children}
    </article>
  );
};

export const CardHeader = ({
  children,
  className = "",
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`px-4 py-3 border-b border-muted font-semibold ${className}`}>
    {children}
  </div>
);

export const CardBody = ({
  children,
  className = "",
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`px-4 py-4 ${className}`}>{children}</div>
);

export const CardFooter = ({
  children,
  className = "",
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`px-4 py-3 border-t border-muted ${className}`}>
    {children}
  </div>
);
