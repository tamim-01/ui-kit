"use client";

import Button from "@/components/Button/Button";
import Alert from "@/components/FeedBack/Alert";
import { useToast } from "@/components/Overlay/Toast/useToast";
import ThemeProvider from "@/components/ThemeProvider";

const FeedbackExamples = () => {
  const { toast } = useToast();
  const positions = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ] as const;

  const variants = ["success", "error", "info", "warning"] as const;
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 ">
      <ThemeProvider />
      <section className="space-y-4 p-6">
        <h2 className="text-lg font-semibold mb-2">Alert Examples</h2>

        <Alert>This is an info alert with default icon.</Alert>

        <Alert variant="success">
          Success! Your action was completed successfully.
        </Alert>

        <Alert variant="error" dismissible>
          Error! Something went wrong. You can dismiss this alert.
        </Alert>

        <Alert variant="warning" icon={<span>🚨</span>} dismissible>
          Warning! Please double-check your input.
        </Alert>
      </section>
      <section className="space-y-8 p-6">
        <h2 className="text-lg font-semibold">Toast Positions & Variants</h2>

        {positions.map((position) => (
          <div key={position} className="space-y-2">
            <h3 className="font-medium capitalize">
              {position.replace("-", " ")}
            </h3>
            <div className="flex gap-4 flex-wrap">
              {variants.map((type) => (
                <Button
                  key={type}
                  onClick={() =>
                    toast({
                      message: `This is a ${type} toast`,
                      type,
                      position,
                    })
                  }
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FeedbackExamples;
