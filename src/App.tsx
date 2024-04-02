import Markdown from "react-markdown";
import "./App.css";
import bypass from "./posts/bypass.md?raw";
import bypass2 from "./posts/bypass2.md?raw";
import bypass3 from "./posts/bypass3.md?raw";
import bypass4 from "./posts/bypass4.md?raw";
import bypass5 from "./posts/bypass5.md?raw";
import bypass6 from "./posts/bypass6.md?raw";
import bypass7 from "./posts/bypass7.md?raw";

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

function App() {
  const bypasses = [
    bypass,
    bypass2,
    bypass3,
    bypass4,
    bypass5,
    bypass6,
    bypass7,
  ];

  const randomBypass = bypasses[getRandomInt(bypasses.length)];

  return (
    <>
      <h1>This Will Bypass the System</h1>
      <div>
        <Markdown>{randomBypass}</Markdown>
      </div>
    </>
  );
}

export default App;
