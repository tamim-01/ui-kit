"use client";
import { useState } from "react";
import Input from "../../components/Input/Input";
import ThemeProvider from "@/components/ThemeProvider";

const InputExamples = () => {
  const [textValue, setTextValue] = useState("John Doe");
  const [emailValue, setEmailValue] = useState("john.doe@example.com");

  const [isSubscribed, setIsSubscribed] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [gender, setGender] = useState("female");
  const [plan, setPlan] = useState("pro");

  const [birthdate, setBirthdate] = useState("1990-01-15");
  const [favoriteColor, setFavoriteColor] = useState("#3b82f6");

  const [satisfaction, setSatisfaction] = useState(8);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 ">
      <ThemeProvider />
      <h1 className="text-3xl font-bold text-primary mb-8">
        Input Component Examples
      </h1>

      <section className="space-y-6">
        <h2 className="text-xl font-bold text-primary">Text Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            placeholder="Enter your full name"
            variant="default"
            size="md"
            fullWidth
          />

          <Input
            label="Email Address"
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Enter your email"
            variant="underlined"
            size="md"
            fullWidth
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            variant="default"
            size="md"
            fullWidth
          />

          <Input
            label="Search"
            type="search"
            placeholder="Search products..."
            variant="ghost"
            size="md"
            fullWidth
          />

          <Input
            label="Age"
            type="number"
            placeholder="Enter your age"
            min={0}
            max={120}
            variant="default"
            size="md"
            fullWidth
          />

          <Input
            label="Username (Disabled)"
            type="text"
            value="johndoe123"
            placeholder="Enter username"
            disabled
            variant="default"
            size="md"
            fullWidth
          />

          <Input
            label="Website URL"
            type="url"
            placeholder="Enter your website URL"
            error
            errorMessage="Please enter a valid URL"
            variant="default"
            size="md"
            fullWidth
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold text-primary">
          Checkbox & Radio Inputs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Input
              type="checkbox"
              label="Subscribe to newsletter"
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
              variant="default"
              size="md"
            />

            <Input
              type="checkbox"
              label="I accept the terms and conditions"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              variant="default"
              size="md"
              error={!acceptTerms}
              errorMessage={
                !acceptTerms ? "You must accept the terms to continue" : ""
              }
            />

            <Input
              type="checkbox"
              label="Remember me (Disabled)"
              checked={true}
              disabled
              variant="default"
              size="md"
            />
          </div>

          <div>
            <Input
              label="Gender"
              type="radio"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
              variant="default"
              size="md"
            />
          </div>

          <div>
            <Input
              label="Subscription Plan"
              type="radio"
              name="plan"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              options={[
                { value: "free", label: "Free Plan" },
                { value: "basic", label: "Basic Plan ($9.99/month)" },
                { value: "pro", label: "Pro Plan ($19.99/month)" },
              ]}
              variant="default"
              size="md"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold text-primary">Special Input Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Date of Birth"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            variant="default"
            size="md"
            fullWidth
          />

          <Input
            label="Favorite Color"
            type="color"
            value={favoriteColor}
            onChange={(e) => setFavoriteColor(e.target.value)}
            variant="default"
            size="md"
          />

          <div className="col-span-1 md:col-span-2">
            <Input
              label={`Satisfaction Level: ${satisfaction}/10`}
              type="range"
              min={0}
              max={10}
              step={0}
              value={satisfaction}
              onChange={(e) => setSatisfaction(parseInt(e.target.value))}
              variant="ghost"
              size="md"
              fullWidth
            />
          </div>

          <Input
            label="Upload Profile Picture"
            type="file"
            accept="image/*"
            variant="default"
            size="md"
            fullWidth
          />

          <Input
            label=" Appointment Time"
            type="time"
            variant="default"
            size="md"
            fullWidth
          />
        </div>
      </section>
    </div>
  );
};

export default InputExamples;
