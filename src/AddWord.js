import React, { useState } from "react";
import { addWord } from "./database/database";

function AddWord() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await addWord(word, translation);
      setSuccess(true);
      setWord("");
      setTranslation("");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New word in Sy'k Fiar:</label>
        <input
          type="text"
          placeholder="insert new word"
          onChange={e => setWord(e.target.value)}
          value={word}
        />
        <label>English Translation:</label>
        <input
          type="text"
          placeholder="insert translation"
          onChange={e => setTranslation(e.target.value)}
          value={translation}
        />
        <input type="submit" value="add word" />
      </form>
      {success && <div>hooray!</div>}
    </div>
  );
}

export default AddWord;
