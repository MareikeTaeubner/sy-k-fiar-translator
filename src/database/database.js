const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ translations: [] }).write();

/**
 * Adds the given word and its translation to the database.
 *
 * @param {string} word word in Sy'k Fiar
 * @param {string} translation english translation of the word
 */
function addWord(word, translation) {
  db.get("translations")
    .push({
      sf: word,
      en: translation
    })
    .write();
}

/**
 * Returns the english translation of the given word from the database
 * or *undefined* if the word was not found.
 *
 * @param {string} word word in Sy'k Fiar
 * @returns {string} the english translation or *undefined* if nothing was found
 */
function getEn(word) {
  const dataset = db
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
 * @returns {string} the Sy'k Fiar translation or *undefined* if nothing was found
 */
function getSf(word) {
  const dataset = db
    .get("translations")
    .find({
      en: word
    })
    .value();

  return dataset ? dataset.sf : undefined;
}

module.exports = {
  addWord,
  getEn,
  getSf
};
