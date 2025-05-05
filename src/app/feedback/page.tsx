"use client";

import Button from "@/components/Button/Button";
import Alert from "@/components/FeedBack/Alert";
import Skeleton from "@/components/FeedBack/Skeleton";
import Container from "@/components/Layout/Container";
import LoadingSpinner from "@/components/FeedBack/LoadingSpinner";
import { useToast } from "@/components/utils/useToast";

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
    <Container maxWidth="4xl" padding="lg" className="space-y-12 mt-12">
      <section className="space-y-8 p-8 max-w-xl">
        <h2 className="text-xl font-bold text-foreground">Skeleton Variants</h2>

        <div>
          <h3 className="mb-2 font-medium text-muted-foreground">
            Single Line (rounded-lg)
          </h3>
          <Skeleton width="200px" height="20px" rounded="lg" />
        </div>

        <div>
          <h3 className="mb-2 font-medium text-muted-foreground">
            Multiple Lines (rounded-sm)
          </h3>
          <Skeleton count={3} width="100%" height="16px" rounded="sm" />
        </div>

        <div>
          <h3 className="mb-2 font-medium text-muted-foreground">
            Avatar Circle (rounded-full)
          </h3>
          <Skeleton width="60px" height="60px" rounded="full" />
        </div>

        <div>
          <h3 className="mb-2 font-medium text-muted-foreground">
            Card Placeholder (rounded-md)
          </h3>
          <Skeleton width="100%" height="150px" rounded="md" />
        </div>
      </section>

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

      <section className="p-6 space-y-8">
        <h2 className="text-xl font-bold text-foreground">Spinner Variants</h2>

        <div className="flex items-center gap-8">
          {["primary", "secondary", "muted"].map((variant) => (
            <div key={variant} className="flex flex-col items-center gap-2">
              <LoadingSpinner
                variant={variant as "primary" | "secondary" | "muted"}
              />
              <span className="text-sm text-muted-foreground capitalize">
                {variant}
              </span>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-foreground">Spinner Sizes</h2>

        <div className="flex items-center gap-8">
          {[
            { size: "sm" as const, label: "Small" },
            { size: "md" as const, label: "Medium" },
            { size: "lg" as const, label: "Large" },
            { size: 40, label: "Custom (40px)" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <LoadingSpinner size={item.size} />
              <span className="text-sm text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default FeedbackExamples;
