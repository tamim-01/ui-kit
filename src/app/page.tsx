"use client";
import Button from "@/components/Button/Button";
import TextInput from "@/components/Input/TextInput";
import Textarea from "@/components/Input/Textarea";
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
    <main className="flex flex-col justify-center items-center h-full gap-14">
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
          <div className="flex flex-col gap-4 items-center justify-center ">
            <TextInput label="Default" placeholder="write here..." />
            <TextInput label="Disabled" placeholder="write here..." disabled />
            <TextInput label="Error" placeholder="write here..." error />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center ">
            <TextInput
              label="Underlined"
              variant="underlined"
              placeholder="write here..."
            />
            <TextInput
              label="Disabled"
              variant="underlined"
              placeholder="write here..."
              disabled
            />
            <TextInput
              label="Error"
              variant="underlined"
              placeholder="write here..."
              error
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center ">
            <TextInput
              label="Ghost"
              variant="ghost"
              placeholder="write here..."
            />
            <TextInput
              label="Disabled"
              variant="ghost"
              placeholder="write here..."
              disabled
            />
            <TextInput
              label="Error"
              variant="ghost"
              placeholder="write here..."
              error
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-5 w-full container mx-64 items-center mb-8">
        <h1 className="text-2xl text-primary ">Textarea components</h1>
        <div className="flex flex-col gap-6 items-start justify-center ">
          <Textarea
            label="Default"
            placeholder="this is a textarea"
            description="this is a textarea description"
            resize="none"
            defaultValue={"this is a textarea with default value"}
          />
          <Textarea label="disabled" resize="vertical" disabled />
          <Textarea label="underlined" resize="both" variant="underlined" />
          <Textarea label="" resize="both" disabled />
        </div>
      </section>
    </main>
  );
}
