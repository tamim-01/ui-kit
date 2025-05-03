"use client";

import { ReactNode, useContext } from "react";
import TabsContext from "./TabsContext";

interface TabsContentProps {
  value: string;
  children: ReactNode;
}

const TabsContent = ({ value, children }: TabsContentProps) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tabs.Content must used inside tabs");

  return context.activeValue === value ? (
    <div className="p-4">{children}</div>
  ) : null;
};

export default TabsContent;
