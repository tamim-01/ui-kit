"use client";

import { ReactNode, useState } from "react";

interface TooltipProps {
  content: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  children: React.ReactElement<HTMLElement>;
  className?: string;
  withArrow?: boolean;
}

const Tooltip = ({
  children,
  content,
  position = "top",
  className = "",
  withArrow = true,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const getArrowClasses = (position: TooltipProps["position"]) => {
    const base = "border-solid absolute";
    const size = "border-[6px]";

    switch (position) {
      case "top":
        return `${base} ${size} border-t-secondary top-full left-1/2 -translate-x-1/2 border-t-[6px] border-l-transparent border-r-transparent border-b-0`;
      case "bottom":
        return `${base} ${size} border-b-secondary bottom-full left-1/2 -translate-x-1/2 border-b-[6px] border-l-transparent border-r-transparent border-t-0`;
      case "left":
        return `${base} ${size} border-l-secondary left-full top-1/2 -translate-y-1/2 border-l-[6px] border-t-transparent border-b-transparent border-r-0`;
      case "right":
        return `${base} ${size} border-r-secondary right-full top-1/2 -translate-y-1/2 border-r-[6px] border-t-transparent border-b-transparent border-l-0`;
      default:
        return "";
    }
  };

  const getPositionClass = () => {
    switch (position) {
      case "top":
        return "bottom-full mb-2 left-1/2 -translate-x-1/2";
      case "bottom":
        return "top-full mt-2 left-1/2 -translate-x-1/2";
      case "left":
        return "right-full mr-2 top-1/2 -translate-y-1/2";
      case "right":
        return "left-full ml-2 top-1/2 -translate-y-1/2";
      default:
        return "";
    }
  };

  return (
    <div
      className="relative inline-block w-fit"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div
          className={`absolute z-50 text-sm bg-secondary text-secondary-foreground text-nowrap px-2 py-1 rounded shadow-md ${getPositionClass()} ${className}`}
        >
          {withArrow && (
            <div className={`absolute w-0 h-0 ${getArrowClasses(position)}`} />
          )}
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
