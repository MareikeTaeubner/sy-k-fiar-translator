const { getEn, getSf } = require("./database/database");
var stemmer = require("stemmer");

/**
 * Translates the given phrase to english.
 *
 * @param {string} phrase the phrase in Sy'k Fiar
 * @returns the translated phrase
 */
export async function translateFromSf(phrase) {
  const words = phrase.split(" ");
  const translated = [];
  for (const word of words) {
    let translation = await findTranslation(word);
    if (!translation) {
      translation = "<unknown>";
    }
    translated.push(translation);
  }

  return translated.join(" ");
}

/**
 * Translates the given english phrase to Sy'k Fiar.
 *
 * @param {string} phrase the english phrase
 * @returns the translated phrase
 */
export async function translateFromEn(phrase) {
  const words = phrase.split(" ");
  let translated = await Promise.all(
    words.map(word => stemmer(word)).map(word => getSf(word))
  );

  translated = translated.map(word =>
    word === undefined ? "<unknown>" : word
  );

  return translated.join(" ");
}

/**
 * Translates the given word to english.
 *
 * @param {string} word the word in Sy'k Fiar
 * @returns {Promise<string>} the translated word or *undefined* if the given word was not known
 */
async function findTranslation(word) {
  word = word.toLowerCase();
  let trans = await getEn(word);
  //remove possible adjective suffix and try again
  if (!trans) {
    const withoutSuffix = word.substring(0, word.length - 1);
    trans = await getEn(withoutSuffix);
  }

  return trans;
}
