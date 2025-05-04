import { useToastContext } from "../FeedBack/Toast/ToastProvider";

export const useToast = () => {
  const { addToast } = useToastContext();
  return { toast: addToast };
};
