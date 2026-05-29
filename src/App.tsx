import { useState } from "react";
import "./App.css";
import { Post } from "./Post";
import { getRandomPostIndex, numberOfPosts } from "./post-service";
import { useGetPost } from "./useGetPost";

function App() {
  const [postIndex, setPostIndex] = useState(getRandomPostIndex());
  const { post, isLoading } = useGetPost(postIndex);

  return (
    <>
      <h1>This Will Bypass the System</h1>

      <div>
        <h3>There are {numberOfPosts} known bypasses.</h3>
        <button
          disabled={isLoading}
          onClick={() => setPostIndex(getRandomPostIndex())}
        >
          Load new bypass
        </button>
      </div>

      <br />

      <Post post={post} isLoading={isLoading} />
    </>
  );
}

export default App;
