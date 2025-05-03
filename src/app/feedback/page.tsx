"use client";

import Alert from "@/components/FeedBack/Alert";
import ThemeProvider from "@/components/ThemeProvider";

const FeedbackExamples = () => {
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
    </div>
  );
};

export default FeedbackExamples;
