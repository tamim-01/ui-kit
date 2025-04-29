"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
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
    <main className="flex flex-col justify-center items-center h-screen gap-14">
      <ThemeProvider />
      <section className="flex flex-col space-y-5 w-full container mx-64 items-center  ">
        <h1 className="text-2xl text-primary ">Button variants</h1>
        <div className="flex flex-row flex-wrap gap-3.5 ">
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
        </div>
      </section>
      <section className="flex flex-col space-y-5 w-full container mx-64 items-center">
        <h1 className="text-2xl text-primary "> Input variants</h1>
        <div className="flex flex-row gap-6 items-center">
          {" "}
          <div className="flex flex-col gap-4 items-center justify-center ">
            <Input label="Default" placeholder="write here..." />
            <Input label="Disabled" placeholder="write here..." disabled />
            <Input label="Error" placeholder="write here..." error />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center ">
            <Input
              label="Underlined"
              variant="underlined"
              placeholder="write here..."
            />
            <Input
              label="Disabled"
              variant="underlined"
              placeholder="write here..."
              disabled
            />
            <Input
              label="Error"
              variant="underlined"
              placeholder="write here..."
              error
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center ">
            <Input
              label="Ghost"
              variant="ghost"
              placeholder="write here..."
              type="radio"
            />
            <Input
              label="Disabled"
              variant="ghost"
              placeholder="write here..."
              disabled
            />
            <Input
              label="Error"
              variant="ghost"
              placeholder="write here..."
              error
            />
          </div>
        </div>
      </section>
    </main>
  );
}
