import { FC } from "react";
import TabsComponent from "./TabsComponent";
import TabsList from "./TabsList";
import TabsTrigger from "./TabsTrigger";
import TabsContent from "./TabsContent";

type TabsType = FC<React.ComponentProps<typeof TabsComponent>> & {
  List: typeof TabsList;
  Trigger: typeof TabsTrigger;
  Content: typeof TabsContent;
};

const Tabs = TabsComponent as TabsType;

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

export default Tabs;
