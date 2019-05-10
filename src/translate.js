const { getEn, getSf } = require("./database/database");
var stemmer = require("stemmer");

/**
 * Translates the given phrase to english.
 *
 * @param {string} phrase the phrase in Sy'k Fiar
 * @returns the translated phrase
 */
function translateFromSf(phrase) {
  const words = phrase.split(" ");
  const translated = words
    .map(word => findTranslation(word))
    .map(word => (word === undefined ? "<unknown>" : word));
  return translated.join(" ");
}

/**
 * Translates the given english phrase to Sy'k Fiar.
 *
 * @param {string} phrase the english phrase
 * @returns the translated phrase
 */
function translateFromEn(phrase) {
  const words = phrase.split(" ");
  const translated = words
    .map(word => stemmer(word))
    .map(word => getSf(word))
    .map(word => (word === undefined ? "<unknown>" : word));

  return translated.join(" ");
}

/**
 * Translates the given word to english.
 *
 * @param {string} word the word in Sy'k Fiar
 * @returns the translated word or *undefined* if the given word was not known
 */
function findTranslation(word) {
  let trans = getEn(word);
  //remove possible adjective suffix and try again
  if (!trans) {
    const withoutSuffix = word.substring(0, word.length - 1);
    trans = getEn(withoutSuffix);
  }

  return trans;
}

module.exports = {
  translateFromSf,
  translateFromEn
};
