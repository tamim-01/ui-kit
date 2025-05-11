"use client";

import { ReactNode, useContext } from "react";
import TabsContext from "./TabsContext";

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
}

const TabsTrigger = ({ value, children }: TabsTriggerProps) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tabs.Trigger must be used inside Tabs");

  const isActive = context.activeValue === value;
  const { variant = "underline" } = context;

  const baseClasses =
    "px-4 py-2 text-sm font-medium transition-colors cursor-pointer";

  const variantClasses = {
    underline: isActive
      ? "border-b-2 border-primary text-primary"
      : "border-b-2 border-transparent text-muted-foreground hover:text-primary",
    outline: isActive
      ? "border border-primary text-primary rounded-md bg-background"
      : "border border-transparent text-muted-foreground hover:border-primary",
    pill: isActive
      ? "bg-primary text-white rounded-full px-4 py-1"
      : "bg-muted text-muted-foreground rounded-full px-4 py-1 hover:bg-accent",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={() => context.setActiveValue(value)}
    >
      {children}
    </button>
  );
};

export default TabsTrigger;
