import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export type BypassModel = {
  id: number;
  contents: string;
};

export const Bypass = ({
  bypass: { id, contents },
  isLoading,
}: {
  bypass: BypassModel;
  isLoading: boolean;
}) => {
  const [copySuccessful, setCopySuccessful] = useState<boolean | null>(null);

  useEffect(() => {
    setCopySuccessful(null);
  }, [id]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contents);
      setCopySuccessful(true);
    } catch {
      setCopySuccessful(false);
    }
  };

  return (
    <div>
      <hr />
      {isLoading ? (
        <code>Loading...</code>
      ) : (
        <div>
          <h2>Bypass #{id}</h2>
          <button onClick={copyToClipboard}>
            {copySuccessful === null && <span>Copy 📋</span>}
            {copySuccessful === true && <span>Copied ✅</span>}
            {copySuccessful === false && <span>Failed to copy ❌</span>}
          </button>
          <Markdown>{contents}</Markdown>
        </div>
      )}
      <hr />
    </div>
  );
};
