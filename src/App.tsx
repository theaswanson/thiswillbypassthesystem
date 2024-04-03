import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import "./App.css";
import { getRandomPost } from "./post-service";

function App() {
  const [post, setPost] = useState("");

  useEffect(() => {
    const loadRandomPost = async () => {
      setPost(await getRandomPost());
    };

    loadRandomPost();
  }, []);

  return (
    <>
      <h1>This Will Bypass the System</h1>
      <div>
        <Markdown>{post}</Markdown>
      </div>
    </>
  );
}

export default App;
