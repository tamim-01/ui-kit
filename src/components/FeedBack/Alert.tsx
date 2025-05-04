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
  info: (
    <svg
      className="w-5 h-5 text-blue-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.5C6.753 20.5 2.5 16.247 2.5 11S6.753 1.5 12 1.5 21.5 5.753 21.5 11 17.247 20.5 12 20.5Z"
      />
    </svg>
  ),
  success: (
    <svg
      className="w-5 h-5 text-green-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  error: (
    <svg
      className="w-5 h-5 text-red-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  warning: (
    <svg
      className="w-5 h-5 text-yellow-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.29 3.86L1.82 18a1.25 1.25 0 001.08 1.88h18.2a1.25 1.25 0 001.08-1.88L13.71 3.86a1.25 1.25 0 00-2.42 0z"
      />
    </svg>
  ),
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
