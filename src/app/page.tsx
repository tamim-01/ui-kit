"use client";
import Button from "@/components/Button/Button";
import ThemeProvider from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-4">
      <ThemeProvider />
      <section className="flex flex-row gap-3.5">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="disabled">Disabled</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button
          onClick={() => setLoading(true)}
          variant="secondary"
          loading={loading}
          className="w-32"
        >
          Loading
        </Button>
      </section>
    </main>
  );
}
