"use client";

import { ReactNode, useEffect, useState } from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  position?: "left" | "right" | "top" | "bottom";
  size?: keyof typeof sizeMap;
  children: ReactNode;
  className?: string;
  rounded?: keyof typeof roundedMap;
  outlined?: boolean;
}
const roundedMap = {
  sm: {
    right: "rounded-r-sm",
    left: "rounded-l-sm",
    top: "rounded-t-sm",
    bottom: "rounded-b-sm",
  },
  md: {
    right: "rounded-r-md",
    left: "rounded-l-md",
    top: "rounded-t-md",
    bottom: "rounded-b-md",
  },
  lg: {
    right: "rounded-r-lg",
    left: "rounded-l-lg",
    top: "rounded-t-lg",
    bottom: "rounded-b-lg",
  },
  xl: {
    right: "rounded-r-xl",
    left: "rounded-l-xl",
    top: "rounded-t-xl",
    bottom: "rounded-b-xl",
  },
  "2xl": {
    right: "rounded-r-2xl",
    left: "rounded-l-2xl",
    top: "rounded-t-2xl",
    bottom: "rounded-b-2xl",
  },
  "3xl": {
    right: "rounded-r-3xl",
    left: "rounded-l-3xl",
    top: "rounded-t-3xl",
    bottom: "rounded-b-3xl",
  },
  "4xl": {
    right: "rounded-r-4xl",
    left: "rounded-l-4xl",
    top: "rounded-t-4xl",
    bottom: "rounded-b-4xl",
  },
  full: {
    right: "rounded-r-full",
    left: "rounded-l-full",
    top: "rounded-t-full",
    bottom: "rounded-b-full",
  },
} as const;
const sizeMap = {
  fit: "",
  sm: "w-64 h-64",
  md: "w-96 h-96",
  lg: "w-[32rem] h-[32rem]",
  full: "w-full h-full",
} as const;

const Drawer = ({
  open,
  onClose,
  position = "right",
  size = "fit",
  children,
  className,
  outlined = false,
  rounded,
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
      base: ` ${
        rounded ? roundedMap[rounded].left : "rounded-none"
      } top-0 right-0 h-full ${outlined && "border-primary border-l"} `,
      enter: "translate-x-0",
      exit: "translate-x-full",
    },
    left: {
      base: ` ${
        rounded ? roundedMap[rounded].right : "rounded-none"
      }  top-0 left-0 h-full ${outlined && "border-primary border-r"} `,
      enter: "translate-x-0",
      exit: "-translate-x-full",
    },
    top: {
      base: ` ${
        rounded ? roundedMap[rounded].bottom : "rounded-none"
      } top-0 left-0 w-full ${outlined && "border-primary border-b"} `,
      enter: "translate-y-0",
      exit: "-translate-y-full",
    },
    bottom: {
      base: ` ${
        rounded ? roundedMap[rounded].top : "rounded-none"
      } bottom-0 left-0 w-full ${outlined && "border-primary border-t"} `,
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
        className={`absolute ${
          positionStyles.base
        }bg-background shadow-lg transform transition-transform duration-300 overflow-y-auto    
       ${isVisible ? positionStyles.enter : positionStyles.exit}
       ${sizeClass}
       ${className ?? ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
