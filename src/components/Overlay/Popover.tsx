"use client";

import { useState, useRef, useEffect, ReactNode } from "react";

type PopoverPosition = "top" | "bottom" | "left" | "right";

interface PopoverProps {
  trigger?: "click" | "hover";
  position?: PopoverPosition;
  children: ReactNode;
  content: ReactNode;
  className?: string;
}

const getPositionClasses = (position: PopoverPosition) => {
  switch (position) {
    case "top":
      return "bottom-full left-1/2 -translate-x-1/2 mb-2";
    case "bottom":
      return "top-full left-1/2 -translate-x-1/2 mt-2";
    case "left":
      return "right-full top-1/2 -translate-y-1/2 mr-2";
    case "right":
      return "left-full top-1/2 -translate-y-1/2 ml-2";
    default:
      return "";
  }
};

const Popover = ({
  trigger = "click",
  position = "bottom",

  content,
  children,
  className,
  ...props
}: PopoverProps) => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger !== "click" || !open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, trigger]);

  const handleMouseEnter = () => {
    if (trigger === "hover") setOpen(true);
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") setOpen(false);
  };

  const handleClick = () => {
    if (trigger === "click") setOpen((prev) => !prev);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={popoverRef}
      {...props}
    >
      <div onClick={handleClick} className="cursor-pointer">
        {children}
      </div>

      {open && (
        <div
          className={`absolute z-50 min-w-[150px] rounded-md border bg-white shadow-md p-3 transform ${getPositionClasses(
            position
          )} ${className}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
