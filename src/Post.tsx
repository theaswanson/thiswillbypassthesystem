import Markdown from "react-markdown";

export const Post = ({
  post,
  isLoading,
}: {
  post: string;
  isLoading: boolean;
}) => (
  <div>
    <hr />
    {isLoading ? (
      <code>Loading...</code>
    ) : (
      <div>
        <Markdown>{post}</Markdown>
      </div>
    )}
    <hr />
  </div>
);
