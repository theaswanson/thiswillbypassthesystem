import { useEffect, useState } from "react";
import { getBypassContents } from "./bypass-service";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useGetBypass = (bypassId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [bypass, setBypass] = useState("");

  useEffect(() => {
    const loadBypass = async () => {
      setIsLoading(true);
      await delay(750);

      const bypassContents = await getBypassContents(bypassId);
      setBypass(bypassContents);

      setIsLoading(false);
    };

    loadBypass();
  }, [bypassId]);

  return { isLoading, bypass };
};
