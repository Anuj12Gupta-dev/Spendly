import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      
      // Handle server action responses that return success: false
      if (response && response.success === false) {
        const errorMessage = response.error || "An unexpected error occurred. Please try again.";
        setError(new Error(errorMessage));
        toast.error(errorMessage);
        return;
      }
      
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
      // Only show toast for actual errors, not for server action failures that are already handled
      if (!error.message.includes("Failed to load") && !error.message.includes("Please try again")) {
        toast.error(error.message || "An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;