const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync(`${__dirname}/db.json`);
const db = low(adapter);

db.defaults({ translations: [] }).write();

function addWord(word, translation) {
  db.get("translations")
    .push({
      sf: word,
      en: translation
    })
    .write();
}

function getEn(word) {
  const dataset = db
    .get("translations")
    .find({
      sf: word
    })
    .value();

  return dataset ? dataset.en : undefined;
}

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
