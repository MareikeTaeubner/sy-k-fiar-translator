import Markdown from "markdown-to-jsx";
import React, { useState, useEffect } from "react";

// @ts-ignore
import home from "./home.md";

function Home() {
  const [loaded, setLoaded] = useState(false);
  const [text, setText] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(home);
      if (resp.ok) {
        setText(await resp.text());
        setLoaded(true);
      }
    })().catch(console.error);
  }, []);

  if (loaded) return <Markdown>{text}</Markdown>;
  else return <p>loading...</p>;
}

export default Home;
