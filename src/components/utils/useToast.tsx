import { useToastContext } from "../Overlay/Toast/ToastProvider";

export const useToast = () => {
  const { addToast } = useToastContext();
  return { toast: addToast };
};
