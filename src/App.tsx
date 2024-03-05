import "./App.css";

type Bypass = {
  text: string;
};

function App() {
  const bypassesTs: Bypass[] = [
    {
      text: `
      What the hell...why not
      Hello 🔵 It's official. Signed at 8:16 PM. It was even on TV. Mine really turned blue. Don't forget that tomorrow starts the new Facebook rule (aka... new name, META) where they can use your photos. Don't forget the deadline is today!!! 
      I do not authorize META, Facebook or any entity associated with Facebook to use my photos, information, messages or posts, past or future.
      With this statement, I notify Facebook that
      it is strictly prohibited to disclose, copy, distribute or take any other action against me based on this profile and/or its contents. Violation of privacy may be punishable by law.
      Here's how to do it:
      Hold your finger anywhere in this message and “copy” will appear. Click “copy”. Then go to your page, create a new post and place your finger anywhere in the empty field. “Paste” will appear and click Paste.
      This will bypass the system….
      He who does nothing consents.
      `,
    },
  ];

  return (
    <>
      <h1>This Will Bypass the System</h1>
      <div>
        {bypassesTs.map((bypass) => (
          <p>{bypass.text}</p>
        ))}
      </div>
    </>
  );
}

export default App;
