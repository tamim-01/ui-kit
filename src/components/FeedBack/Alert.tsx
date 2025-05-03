"use client";

import { ReactNode, useState } from "react";

interface AlertProps {
  variant?: "info" | "success" | "error" | "warning";
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  children: ReactNode;
}

const variantClasses = {
  info: "bg-blue-100 text-blue-800 border border-blue-200",
  success: "bg-green-100 text-green-800 border border-green-200",
  error: "bg-red-100 text-red-800 border border-red-200",
  warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
};

const defaultIcons: Record<NonNullable<AlertProps["variant"]>, ReactNode> = {
  info: <span>ℹ️</span>,
  success: <span>✅</span>,
  error: <span>❌</span>,
  warning: <span>⚠️</span>,
};

const Alert = ({
  variant = "info",
  icon,
  dismissible = false,
  onDismiss,
  className,
  children,
}: AlertProps) => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      role="alert"
      className={` w-full p-4 rounded-md flex items-start gap-3 text-sm
       ${variantClasses[variant]}
        ${className}`}
    >
      <span className="pt-0.5">{icon ?? defaultIcons[variant]}</span>

      <div className="flex-1">{children}</div>

      {dismissible && (
        <button
          onClick={() => {
            setVisible(false);
            onDismiss?.();
          }}
          className="text-inherit hover:opacity-70 transition text-lg font-bold"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
