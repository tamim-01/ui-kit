interface TextareaProps {
  rows?: number;
  cols?: number;
  resize?: "none" | "both" | "vertical" | "horizontal";
  variant?: keyof typeof variants;
  placeholder?: string;
  size?: keyof typeof sizes;
  label?: string;
  description?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}
interface ControlledProps extends TextareaProps {
  value?: string | number | readonly string[];
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  defaultValue?: never;
}

interface UncontrolledProps extends TextareaProps {
  defaultValue?: string | number | readonly string[];
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: never;
}
const variants = {
  default:
    " border-2 border-primary rounded-lg bg-background text-gray-900 placeholder:text-gray-400 hover:bg-secondary  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  underlined:
    "border-b-2  border-primary rounded-none bg-background text-gray-900 placeholder:text-gray-400 hover:bg-secondary  focus-visible:outline-none focus-visible:ring-0",
};
const sizes = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-3",
};
const resizeVariants = {
  none: "resize-none",
  both: "resize",
  vertical: "resize-y",
  horizontal: "resize-x",
};
const Textarea = ({
  fullWidth = false,
  rows = 5,
  cols = 40,
  resize = "both",
  defaultValue,
  value,
  onChange,
  variant = "default",
  placeholder,
  size = "md",
  label,
  description,
  id,
  disabled = false,
  className = "",
}: UncontrolledProps | ControlledProps) => {
  const textareaProps =
    value !== undefined && value !== null
      ? { value, onChange }
      : { defaultValue, onChange };
  return (
    <div className={`flex flex-col gap-2 ${fullWidth ? "w-full" : ""}`}>
      {label && (
        <label htmlFor={id} className="text-lg text-primary font-semibold ">
          {label}
        </label>
      )}

      {description && (
        <p className="text-sm text-gray-500 mb-2">{description}</p>
      )}
      <textarea
        id={id}
        {...textareaProps}
        {...{ rows, cols, placeholder, disabled }}
        className={`  transition-all  ${sizes[size]}  ${
          disabled
            ? "bg-muted text-muted-foreground placeholder:text-muted-foreground cursor-not-allowed"
            : variants[variant]
        }  ${resizeVariants[resize]} ${className}`}
      />
    </div>
  );
};
export default Textarea;
