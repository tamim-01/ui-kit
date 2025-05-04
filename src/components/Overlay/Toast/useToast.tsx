import { useToastContext } from "./ToastProvider";

export const useToast = () => {
  const { addToast } = useToastContext();
  return { toast: addToast };
};
