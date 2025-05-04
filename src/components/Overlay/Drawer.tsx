"use client";

import { ReactNode, useEffect, useState } from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  position?: "left" | "right" | "top" | "bottom";
  size?: keyof typeof sizeMap;
  children: ReactNode;
  className?: string;
}

const sizeMap = {
  fit: "",
  sm: "w-64 h-64",
  md: "w-96 h-96",
  lg: "w-[32rem] h-[32rem]",
  full: "w-full h-full",
};

const Drawer = ({
  open,
  onClose,
  position = "right",
  size = "fit",
  children,
  className,
}: DrawerProps) => {
  const [isMounted, setIsMounted] = useState(open);
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setIsMounted(true);
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isMounted) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isMounted, onClose]);

  if (!isMounted) return null;

  const positionStyles = {
    right: {
      base: "top-0 right-0 h-full",
      enter: "translate-x-0",
      exit: "translate-x-full",
    },
    left: {
      base: "top-0 left-0 h-full",
      enter: "translate-x-0",
      exit: "-translate-x-full",
    },
    top: {
      base: "top-0 left-0 w-full",
      enter: "translate-y-0",
      exit: "-translate-y-full",
    },
    bottom: {
      base: "bottom-0 left-0 w-full",
      enter: "translate-y-0",
      exit: "translate-y-full",
    },
  }[position];

  const isVertical = position === "top" || position === "bottom";
  const sizeClass = isVertical
    ? sizeMap[size].replace(/w-\S+/g, "")
    : sizeMap[size].replace(/h-\S+/g, "");

  return (
    <div className="fixed inset-0 z-10 ">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`absolute bg-background shadow-lg transform transition-transform duration-300 overflow-y-auto    ${
          positionStyles.base
        }
       ${isVisible ? positionStyles.enter : positionStyles.exit}
       ${sizeClass}
       ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
