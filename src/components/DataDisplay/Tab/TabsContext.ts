import { createContext } from "react";

export interface TabsContextType {
  activeValue: string;
  setActiveValue: (value: string) => void;
  direction: "horizontal" | "vertical";
  variant?: "underline" | "outline" | "pill";
}


const TabsContext = createContext<TabsContextType | null>(null);
export default TabsContext;
