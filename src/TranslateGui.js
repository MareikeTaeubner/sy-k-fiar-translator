import React, { useState } from "react";
import { translateFromEn } from "./translate";

function TranslateGui() {
  const [phrase, setPhrase] = useState("");
  const [resultSf, setResultSf] = useState("");

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const result = await translateFromEn(phrase);
      setResultSf(result);
      setPhrase("");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <h1>Translate English -> Sy'k Fiar</h1>
      <form onSubmit={handleSubmit}>
        <label>English phrase:</label>
        <input
          type="text"
          placeholder="insert english phrase"
          onChange={e => setPhrase(e.target.value)}
          value={phrase}
        />
        <input type="submit" value="translate" />
      </form>
      <div>{resultSf}</div>
    </div>
  );
}

export default TranslateGui;
