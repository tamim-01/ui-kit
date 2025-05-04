"use client";

import Button from "@/components/Button/Button";
import Link from "next/link";

const categories = [
  {
    name: "Overlay Components",
    description:
      "Includes Modal, Drawer, Tooltip, and Popover components with accessibility and animation.",
    href: "/overlay",
  },
  {
    name: "Input Components",
    description:
      "Reusable Input, Textarea, Select, Switch, and Checkbox components with validation and variants.",
    href: "/input",
  },
  {
    name: "Feedback Components",
    description:
      "Toast, Alert, Spinner, and Skeleton for UI feedback and loading states.",
    href: "/feedback",
  },
  {
    name: "Button Variants",
    description:
      "Different styles, sizes, loading states, and icon support for buttons.",
    href: "/button",
  },
  {
    name: "Display Components",
    description:
      "Includes Tabs and Accordion for organizing and toggling content visually.",
    href: "/display",
  },
];

export default function HomePage() {
  return (
    <main className="p-8 space-y-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mt-5">UI Kit Components</h1>
      <p className="text-muted-foreground text-lg">
        A collection of reusable components built with accessibility,
        customization, and clean design in mind.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="rounded-lg border p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="text-sm text-muted-foreground mt-2">
                {category.description}
              </p>
            </div>

            <div className="mt-4">
              <Link href={category.href}>
                <Button>View Examples</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
