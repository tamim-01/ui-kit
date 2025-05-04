"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

interface Toast {
  id: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
  position?: ToastPosition;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

const iconsVariants = {
  success: (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  ),
  error: (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  warning: (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14"
      />
    </svg>
  ),
  info: (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01"
      />
    </svg>
  ),
};

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = crypto.randomUUID();
    const newToast: Toast = {
      ...toast,
      id,
      position: toast.position ?? "bottom-right",
    };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, toast.duration ?? 3000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const grouped = {
    "top-left": [] as Toast[],
    "top-right": [] as Toast[],
    "bottom-left": [] as Toast[],
    "bottom-right": [] as Toast[],
  };

  toasts.forEach((toast) => {
    grouped[toast.position || "bottom-right"].push(toast);
  });

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}

      {(Object.keys(grouped) as ToastPosition[]).map((position) => (
        <div
          key={position}
          className={`fixed z-50 flex flex-col gap-2 p-4
            ${position.includes("top") ? "top-0" : "bottom-0"}
            ${
              position.includes("left")
                ? "left-0 items-start"
                : "right-0 items-end"
            }
          `}
        >
          {grouped[position].map((toast) => (
            <div
              key={toast.id}
              className={`flex items-start gap-2 rounded px-4 py-3 text-sm shadow transition-all duration-300 animate-slide-in
              ${
                toast.type === "success"
                  ? "bg-green-100 text-green-800"
                  : toast.type === "error"
                  ? "bg-red-100 text-red-800"
                  : toast.type === "warning"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-800"
              }
            `}
            >
              <span className="mt-0.5">
                {toast.type && iconsVariants[toast.type]}
              </span>
              <span>{toast.message}</span>
            </div>
          ))}
        </div>
      ))}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
