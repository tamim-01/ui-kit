"use client";
import { useState } from "react";
import RadioGroup from "@/components/Input/RadioGroup";
import Checkbox from "@/components/Input/Checkbox";
import TextInput from "@/components/Input/TextInput";
import RangeInput from "@/components/Input/RangeInput";
import FileInput from "@/components/Input/FileInput";
import Textarea from "@/components/Input/Textarea";
import Switch from "@/components/Input/Switch";
import Select from "@/components/Input/Select";
import Container from "@/components/Layout/Container";

const InputExamples = () => {
  const [textValue, setTextValue] = useState("John Doe");
  const [emailValue, setEmailValue] = useState("john.doe@example.com");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [gender, setGender] = useState("female");
  const [plan, setPlan] = useState("pro");
  const [birthdate, setBirthdate] = useState("1990-01-15");
  const [satisfaction, setSatisfaction] = useState(8);

  return (
    <Container maxWidth="4xl" padding="lg" className="space-y-12 mt-12">
      <h1 className="text-3xl font-bold text-primary mb-8">
        Input Component Examples
      </h1>

      <section className="space-y-6">
        <h2 className="text-xl font-bold text-primary">Text Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput
            label="Full Name"
            type="text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            placeholder="Enter your full name"
            variant="default"
            inputSize="md"
            fullWidth
          />

          <TextInput
            label="Email Address"
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Enter your email"
            variant="underlined"
            inputSize="md"
            fullWidth
          />

          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            variant="default"
            inputSize="md"
            fullWidth
          />

          <TextInput
            label="Search"
            type="search"
            placeholder="Search products..."
            variant="ghost"
            inputSize="md"
            fullWidth
          />

          <TextInput
            label="Age"
            type="number"
            placeholder="Enter your age"
            min={0}
            max={120}
            variant="default"
            inputSize="md"
            fullWidth
          />

          <TextInput
            label="Username (Disabled)"
            type="text"
            value="johndoe123"
            placeholder="Enter username"
            disabled
            variant="default"
            inputSize="md"
            fullWidth
          />

          <TextInput
            label="Website URL"
            type="url"
            placeholder="Enter your website URL"
            error
            errorMessage="Please enter a valid URL"
            variant="default"
            inputSize="md"
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
            <Checkbox
              label="Subscribe to newsletter"
              value={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
              variant="default"
              size="md"
            />

            <Checkbox
              label="I accept the terms and conditions"
              onChange={(e) => setAcceptTerms(e.target.checked)}
              variant="default"
              size="md"
              error={!acceptTerms}
              errorMessage={
                !acceptTerms ? "You must accept the terms to continue" : ""
              }
            />

            <Checkbox
              label="Remember me (Disabled)"
              disabled
              variant="default"
              size="md"
            />
          </div>

          <div>
            <RadioGroup
              label="Gender"
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
            <RadioGroup
              label="Subscription Plan"
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
          <TextInput
            label="Date of Birth"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            variant="default"
            inputSize="md"
            fullWidth
          />

          <div className="col-span-1 md:col-span-2">
            <RangeInput
              label={`Satisfaction Level: ${satisfaction}/10`}
              min={0}
              max={10}
              step={0}
              value={satisfaction}
              onChange={(e) => setSatisfaction(parseInt(e.target.value))}
              variant="ghost"
              inputSize="md"
              fullWidth
            />
          </div>

          <FileInput
            label="Upload Profile Picture"
            accept="image/*"
            variant="default"
            inputSize="md"
            buttonText="Choose Files"
            fullWidth
          />

          <FileInput
            label="Droppable Upload"
            accept="image/*"
            variant="default"
            buttonText="Choose Files"
            multiple
            droppable
            inputSize="md"
            fullWidth
          />

          <TextInput
            label="Appointment Time"
            type="time"
            variant="default"
            inputSize="md"
            fullWidth
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">
          Multiline Textarea Input
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Textarea
            label="Bio"
            placeholder="Tell us about yourself..."
            description="This will appear on your public profile."
            variant="default"
            size="md"
            resize="vertical"
            fullWidth
          />

          <Textarea
            label="Feedback"
            placeholder="Write your feedback here..."
            variant="underlined"
            size="md"
            resize="none"
            className="text-red-600"
            fullWidth
          />

          <Textarea
            label="Disabled Notes"
            placeholder="Disabled input"
            disabled
            variant="default"
            size="sm"
            resize="horizontal"
            fullWidth
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">
          Switch (Toggle) Inputs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Switch
            label="Enable Dark Mode"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
            variant="default"
            size="md"
          />

          <Switch
            label="Allow Notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            variant="ghost"
            size="lg"
          />

          <Switch
            label="Auto Updates"
            checked={false}
            disabled
            variant="default"
            size="sm"
          />
        </div>
      </section>

      <section className="space-y-6 mb-72">
        <h2 className="text-xl font-bold text-primary">Custom Select Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="solo select"
            options={[
              { label: "Apple", value: "apple" },
              { label: "Banana", value: "banana" },
              { label: "Mango", value: "mango" },
              { label: "Strawberry", value: "strawberry" },
            ]}
            placeholder="Choose a fruit"
            variant="default"
            fullWidth
          />

          <Select
            label="multiple"
            multiple
            options={[
              { label: "HTML", value: "html" },
              { label: "CSS", value: "css" },
              { label: "JavaScript", value: "javascript" },
              { label: "React", value: "react" },
              { label: "TypeScript", value: "typescript" },
            ]}
            placeholder="Select your skills"
            description="You can select multiple skills."
            variant="default"
            fullWidth
          />
          <Select
            label="Searchable "
            searchable
            options={[
              { label: "HTML", value: "html" },
              { label: "CSS", value: "css" },
              { label: "JavaScript", value: "javascript" },
              { label: "React", value: "react" },
              { label: "TypeScript", value: "typescript" },
            ]}
            placeholder="Select your skills"
            description="You can select multiple skills."
            variant="default"
            fullWidth
          />
          <Select
            label="Searchable multiple"
            searchable
            multiple
            options={[
              { label: "HTML", value: "html" },
              { label: "CSS", value: "css" },
              { label: "JavaScript", value: "javascript" },
              { label: "React", value: "react" },
              { label: "TypeScript", value: "typescript" },
            ]}
            placeholder="Select your skills"
            description="You can select multiple skills."
            variant="default"
            fullWidth
          />
        </div>
      </section>
    </Container>
  );
};

export default InputExamples;
