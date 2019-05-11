import low from "lowdb";
import { adapter } from "./lowAdapter";

const db = low(adapter);

// db.defaults({ translations: [] }).write();

/**
 * Adds the given word and its translation to the database.
 *
 * @param {string} word word in Sy'k Fiar
 * @param {string} translation english translation of the word
 */
export async function addWord(word, translation) {
  const db2 = await db;
  const translations = db2.get("translations");

  if (translations.findIndex({ sf: word }).value() === -1) {
    await translations
      .push({
        sf: word,
        en: translation
      })
      .write();
  }
}

/**
 * Returns the english translation of the given word from the database
 * or *undefined* if the word was not found.
 *
 * @param {string} word word in Sy'k Fiar
 * @returns {Promise<string>} the english translation or *undefined* if nothing was found
 */
export async function getEn(word) {
  const db2 = await db;
  const dataset = db2
    .get("translations")
    .find({
      sf: word
    })
    .value();

  return dataset ? dataset.en : undefined;
}

/**
 * Returns the Sy'k Fiar translation of the given word from the database
 * or *undefined* if the word was not found.
 * @param {string} word the word in english
 * @returns {Promise<string>} the Sy'k Fiar translation or *undefined* if nothing was found
 */
export async function getSf(word) {
  const db2 = await db;
  const dataset = db2
    .get("translations")
    .find({
      en: word
    })
    .value();

  return dataset ? dataset.sf : undefined;
}
