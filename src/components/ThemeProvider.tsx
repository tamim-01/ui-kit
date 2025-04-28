"use client";

import { useState, useEffect } from "react";

const ThemeProvider = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  return (
    <div>
      <div className="fixed top-4 left-4 space-x-2 z-50">
        <button
          onClick={() => toggleTheme("light")}
          className="px-4 py-2   rounded"
        >
          Light
        </button>
        <button
          onClick={() => toggleTheme("dark")}
          className="px-4 py-2  rounded"
        >
          Dark
        </button>
        <button
          onClick={() => toggleTheme("forest")}
          className="px-4 py-2  rounded"
        >
          Forest
        </button>
        <button
          onClick={() => toggleTheme("ocean")}
          className="px-4 py-2  rounded"
        >
          Ocean
        </button>
        <button
          onClick={() => toggleTheme("sunset")}
          className="px-4 py-2  rounded"
        >
          sunset
        </button>
        <button
          onClick={() => toggleTheme("purple")}
          className="px-4 py-2  rounded"
        >
          purple
        </button>
        <button
          onClick={() => toggleTheme("autumn")}
          className="px-4 py-2  rounded"
        >
          autumn
        </button>
        <button
          onClick={() => toggleTheme("candy")}
          className="px-4 py-2  rounded"
        >
          candy
        </button>
      </div>
    </div>
  );
};

export default ThemeProvider;
