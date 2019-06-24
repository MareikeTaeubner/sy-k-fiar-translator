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
        <p>Insert the {language} phrase you want to translate</p>
        <input
          type="text"
          placeholder={`insert ${language} phrase`}
          onChange={e => setPhrase(e.target.value)}
          value={phrase}
        />
        <input type="submit" value="Translate" />
      </form>
      <output>{result}</output>
    </div>
  );
}

export default TranslateForm;
