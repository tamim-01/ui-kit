"use client";

import { useState, ReactNode } from "react";
import TabsContext from "./TabsContext";

interface TabsProps {
  defaultValue?: string;
  children: ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  direction?: "horizontal" | "vertical";
  variant?: "underline" | "outline" | "pill";
}

const TabsComponent = ({
  defaultValue = "",
  value,
  onValueChange,
  children,
  direction = "horizontal",
  variant,
}: TabsProps) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);

  const activeValue = isControlled ? value : internalValue;
  const setActiveValue = (val: string) => {
    if (isControlled) {
      onValueChange?.(val);
    } else {
      setInternalValue(val);
    }
  };

  return (
    <TabsContext.Provider
      value={{ activeValue, setActiveValue, direction, variant }}
    >
      <div
        className={`w-fit flex  ${
          direction === "vertical" ? "flex-row" : "flex-col"
        }`}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export default TabsComponent;
