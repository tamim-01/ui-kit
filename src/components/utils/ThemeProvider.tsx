"use client";

import { useState, useEffect } from "react";
import Drawer from "../Overlay/Drawer";
import Button from "../Button/Button";
import Link from "next/link";
import Accordion from "../DataDisplay/Accordion";
import { usePathname } from "next/navigation";

const ThemeProvider = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<string>("light");
  const [openDrawer, setOpenDrawer] = useState(false);

  const themes = [
    "dark",
    "light",
    "forest",
    "candy",
    "autumn",
    "purple",
    "ocean",
  ];

  const pages = [
    { label: "Home", href: "/" },
    { label: "Overlay", href: "/overlay" },
    { label: "Input", href: "/input" },
    { label: "Feedback", href: "/feedback" },
    { label: "Button", href: "/button" },
    { label: "Display", href: "/display" },
  ];

  const toggleTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div className="fixed left-4 top-4 z-50 bg-background rounded-full p-2 shadow-md">
      <button
        onClick={() => setOpenDrawer((prev) => !prev)}
        className="text-primary hover:bg-muted rounded-full p-1 transition"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        position="left"
        size="fit"
        rounded="xl"
      >
        <section className="flex flex-col gap-8 p-8 min-w-[250px]">
          <div>
            <Accordion title="Pages" variant="ghost">
              <ul className="flex flex-col gap-2">
                {pages.map((page) => {
                  const isActive = page.href === pathname;
                  return (
                    <Link key={page.href} href={page.href}>
                      <Button
                        className="w-full justify-start"
                        variant={isActive ? "secondary" : "ghost"}
                      >
                        {page.label}
                      </Button>
                    </Link>
                  );
                })}
              </ul>
            </Accordion>
          </div>

          <div>
            <Accordion title="Themes" variant="ghost">
              <ul className="flex flex-col gap-2">
                {themes.map((t) => (
                  <Button
                    key={t}
                    onClick={() => toggleTheme(t)}
                    variant={t === theme ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </Button>
                ))}
              </ul>
            </Accordion>
          </div>
        </section>
      </Drawer>
    </div>
  );
};

export default ThemeProvider;
