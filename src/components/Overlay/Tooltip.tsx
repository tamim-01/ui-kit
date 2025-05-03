"use client";

import { ReactNode, useState } from "react";

interface TooltipProps {
  content: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  children: React.ReactElement<HTMLElement>;
  className?: string;
  withArrow?: boolean;
}
const Tooltip = ({ children, content, position = "top" }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      className="relative inline-block w-fit"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div
          className={`absolute z-50 text-sm bg-secondary text-secondary-foreground text-nowrap px-2 py-1 rounded shadow-md
            ${
              position === "top" && "bottom-full mb-2 left-1/2 -translate-x-1/2"
            }
            ${
              position === "bottom" && "top-full mt-2 left-1/2 -translate-x-1/2"
            }
            ${position === "left" && "right-full mr-2 top-1/2 -translate-y-1/2"}
            ${position === "right" && "left-full ml-2 top-1/2 -translate-y-1/2"}
          `}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
