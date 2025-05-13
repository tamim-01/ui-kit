"use client";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Container from "@/components/Layout/Container";

const ButtonExamples = () => {
  const [isLoading, setIsLoading] = useState({
    primary: false,
    secondary: false,
    destructive: false,
    ghost: false,
    danger: false,
    warning: false,
    info: false,
  });

  const handleButtonClick = (buttonType: string) => {
    setIsLoading({ ...isLoading, [buttonType]: true });

    setTimeout(() => {
      setIsLoading({ ...isLoading, [buttonType]: false });
    }, 2000);
  };

  return (
    <Container maxWidth="4xl" padding="lg" className="space-y-12 mt-12">
      <h1 className="text-3xl font-bold text-primary">
        Button Component Examples
      </h1>
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-primary">Button Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-lg border border-muted shadow-lg">
              <h3 className="text-lg font-medium text-primary mb-3">
                Primary Button
              </h3>
              <p className="text-primary-foreground mb-4">
                Use primary buttons for the main action in a section or form.
              </p>
              <Button
                variant="primary"
                onClick={() => handleButtonClick("primary")}
                loading={isLoading.primary}
              >
                Primary Action
              </Button>
            </div>

            <div className="p-4 rounded-lg border border-muted shadow-lg">
              <h3 className="text-lg font-medium text-primary mb-3">
                Secondary Button
              </h3>
              <p className="text-primary-foreground mb-4">
                Use secondary buttons for alternative actions.
              </p>
              <Button
                variant="secondary"
                onClick={() => handleButtonClick("secondary")}
                loading={isLoading.secondary}
              >
                Secondary Action
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-lg border border-muted shadow-lg">
              <h3 className="text-lg font-medium text-primary mb-3">
                Ghost Button
              </h3>
              <p className="text-primary-foreground mb-4">
                Use ghost buttons for less prominent actions.
              </p>
              <Button
                variant="ghost"
                onClick={() => handleButtonClick("ghost")}
                loading={isLoading.ghost}
              >
                Ghost Action
              </Button>
            </div>
            <div className="p-4 rounded-lg border border-muted shadow-lg">
              <h3 className="text-lg font-medium text-primary mb-3">
                Destructive Button
              </h3>
              <p className="text-primary-foreground mb-4">
                Use destructive buttons for actions that remove or delete
                content.
              </p>
              <Button
                variant="destructive"
                onClick={() => handleButtonClick("destructive")}
                loading={isLoading.destructive}
              >
                Delete Item
              </Button>
            </div>{" "}
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-lg border border-muted shadow-lg">
              <h3 className="text-lg font-medium text-primary mb-3">
                Dangerous Button
              </h3>
              <p className="text-primary-foreground mb-4">
                Use Danger buttons for Dangerous or error actions.
              </p>
              <Button
                variant="danger"
                onClick={() => handleButtonClick("danger")}
                loading={isLoading.danger}
              >
                dangerous Action
              </Button>
            </div>
            <div className="p-4 rounded-lg border border-muted shadow-lg">
              <h3 className="text-lg font-medium text-primary mb-3">
                Disabled Button
              </h3>
              <p className="text-primary-foreground mb-4">
                Use disabled buttons for actions that are not currently
                available.
              </p>
              <Button disabled>Unavailable Action</Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-lg border border-muted shadow-lg">
              <h3 className="text-lg font-medium text-primary mb-3">
                warning Button
              </h3>
              <p className="text-primary-foreground mb-4">
                Use warning buttons for showing a warning action .
              </p>
              <Button
                variant="warning"
                onClick={() => handleButtonClick("warning")}
                loading={isLoading.warning}
              >
                warning Action
              </Button>
            </div>
            <div className="p-4 rounded-lg border border-muted shadow-lg">
              <h3 className="text-lg font-medium text-primary mb-3">
                info Button
              </h3>
              <p className="text-primary-foreground mb-4">
                Use info buttons for showing some information.
              </p>
              <Button
                variant="info"
                onClick={() => handleButtonClick("info")}
                loading={isLoading.info}
              >
                info Action
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-primary">Button Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center p-4 rounded-lg border border-muted shadow-lg">
          <Button variant="primary" size="sm">
            Small Button
          </Button>

          <Button variant="primary" size="md">
            Medium Button
          </Button>

          <Button variant="primary" size="lg">
            Large Button
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 items-center p-4 rounded-lg border border-muted shadow-lg">
          <Button variant="secondary" size="sm">
            Small Button
          </Button>

          <Button variant="secondary" size="md">
            Medium Button
          </Button>

          <Button variant="secondary" size="lg">
            Large Button
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center p-4 rounded-lg border border-muted shadow-lg">
          <Button variant="destructive" size="sm">
            Small Button
          </Button>

          <Button variant="destructive" size="md">
            Medium Button
          </Button>

          <Button variant="destructive" size="lg">
            Large Button
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center p-4 rounded-lg border border-muted shadow-lg">
          <Button variant="ghost" size="sm">
            Small Button
          </Button>

          <Button variant="ghost" size="md">
            Medium Button
          </Button>

          <Button variant="ghost" size="lg">
            Large Button
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center p-4 rounded-lg border border-muted shadow-lg">
          <Button variant="danger" size="sm">
            Small Button
          </Button>

          <Button variant="danger" size="md">
            Medium Button
          </Button>

          <Button variant="danger" size="lg">
            Large Button
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center p-4 rounded-lg border border-muted shadow-lg">
          <Button variant="warning" size="sm">
            Small Button
          </Button>

          <Button variant="warning" size="md">
            Medium Button
          </Button>

          <Button variant="warning" size="lg">
            Large Button
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center p-4 rounded-lg border border-muted shadow-lg">
          <Button variant="info" size="sm">
            Small Button
          </Button>

          <Button variant="info" size="md">
            Medium Button
          </Button>

          <Button variant="info" size="lg">
            Large Button
          </Button>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-primary">Buttons with Icons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-muted shadow-lg">
            <h3 className="text-lg font-medium text-primary mb-3">
              Leading Icon
            </h3>
            <Button variant="primary" className="gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add Item
            </Button>
          </div>

          <div className="p-4 rounded-lg border border-muted shadow-lg">
            <h3 className="text-lg font-medium text-primary mb-3">
              Trailing Icon
            </h3>
            <Button variant="primary" className="gap-2">
              Next Step
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>

          <div className="p-4 rounded-lg border border-muted shadow-lg">
            <h3 className="text-lg font-medium text-primary mb-3">Icon Only</h3>
            <div className="flex gap-4">
              <Button variant="primary" className="w-10 h-10 p-0 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>

              <Button
                variant="secondary"
                className="w-10 h-10 p-0 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ButtonExamples;
