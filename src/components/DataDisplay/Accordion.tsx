"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import Image from "next/image";

interface AccordionProps {
  title: string;
  children: ReactNode;
  variant?: "default" | "outlined" | "ghost";
  icon?: ReactNode;
  className?: string;
}

const Accordion = ({
  title,
  children,
  variant = "default",
  icon,
  className,
}: AccordionProps) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  const baseStyles =
    "w-full rounded-md transition-all duration-300 overflow-hidden";
  const variantStyles = {
    default: "bg-secondary px-4 py-3",
    outlined: "border border-border px-4 py-3",
    ghost: "bg-transparent px-4 py-3",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
    >
      <button
        className="w-full flex items-center justify-between gap-2 text-left font-bold text-foreground"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          {icon || (
            <Image
              src="/icons/arrow.svg"
              alt="arrow"
              width={16}
              height={16}
              className="inline-block"
            />
          )}
        </span>
      </button>

      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: height }}
      >
        <div className="mt-2 text-sm text-foreground">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
