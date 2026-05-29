import { useState } from "react";
import "./App.css";
import { Bypass } from "./Bypass";
import { getRandomBypassId, numberOfBypasses } from "./bypass-service";
import { useGetBypass } from "./useGetBypass";

function App() {
  const [bypassId, setBypassId] = useState(getRandomBypassId());
  const { bypass, isLoading } = useGetBypass(bypassId);

  return (
    <>
      <h1>This Will Bypass the System</h1>

      <div>
        <h3>There are {numberOfBypasses} known bypasses.</h3>
        <button
          disabled={isLoading}
          onClick={() => setBypassId(getRandomBypassId())}
        >
          Load new bypass
        </button>
      </div>

      <br />

      <Bypass
        bypass={{ id: bypassId, contents: bypass }}
        isLoading={isLoading}
      />
    </>
  );
}

export default App;
