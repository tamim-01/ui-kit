"use client";

import { FC, ReactNode, useContext } from "react";
import TabsContext from "./TabsContext";

interface TabsListProps {
  children: ReactNode;
}

const TabsList: FC<TabsListProps> = ({ children }: { children: ReactNode }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tabs.List must be used inside Tabs");

  const { direction } = context;

  return (
    <div
      className={` gap-2 ${
        direction === "vertical" ? "flex flex-col " : "flex flex-row "
      }`}
    >
      {children}
    </div>
  );
};

export default TabsList;
