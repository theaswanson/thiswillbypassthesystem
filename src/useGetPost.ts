import { useEffect, useState } from "react";
import { getPostContents } from "./post-service";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useGetPost = (postIndex: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState("");

  useEffect(() => {
    const loadPost = async () => {
      setIsLoading(true);
      await delay(750);

      const postContents = await getPostContents(postIndex);
      setPost(postContents);

      setIsLoading(false);
    };

    loadPost();
  }, [postIndex]);

  return { isLoading, post };
};
