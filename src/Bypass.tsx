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
}) => (
  <div>
    <hr />
    {isLoading ? (
      <code>Loading...</code>
    ) : (
      <div>
        <h2>Bypass #{id}</h2>
        <Markdown>{contents}</Markdown>
      </div>
    )}
    <hr />
  </div>
);
