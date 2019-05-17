import React, { useState } from "react";

function TranslateForm({ header, language, translate }) {
  const [phrase, setPhrase] = useState("");
  const [result, setResult] = useState("");

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const result = await translate(phrase);
      setResult(result);
      setPhrase("");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <h1>{header}</h1>
      <form onSubmit={handleSubmit}>
        <label>{language} phrase:</label>
        <input
          type="text"
          placeholder={`insert ${language} phrase`}
          onChange={e => setPhrase(e.target.value)}
          value={phrase}
        />
        <input type="submit" value="translate" />
      </form>
      <div>{result}</div>
    </div>
  );
}

export default TranslateForm;