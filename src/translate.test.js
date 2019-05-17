import { translateFromEn, translateFromSf } from "./translate";
import { addWord } from "./database/database";

describe("translate", () => {
  beforeAll(async () => {
    //add words to database in case they are not yet present
    await addWord("fyre", "fire");
    await addWord("rhyn", "earth");
    await addWord("raifa", "burn");
    await addWord("est", "[p]");
    await addWord("noict", "black");
  });

  describe("#translateFromEn", () => {
    it("should translate a single known word", async () => {
      const result = await translateFromEn("fire");
      expect(result).toBe("fyre");
    });

    it("should translate a three word phrase", async () => {
      const result = await translateFromEn("fire burn earth");
      expect(result).toBe("fyre raifa rhyn");
    });

    it("should translate unknown words with <unknown>", async () => {
      const result = await translateFromEn("someUnkownWord");
      expect(result).toBe("<unknown>");
    });

    it("should translate case insensitive", async () => {
      const result = await translateFromEn("FIre bUrN");
      expect(result).toBe("fyre raifa");
    });
  });

  describe("#translateFromSf", () => {
    it("should translate a single known word", async () => {
      const result = await translateFromSf("fyre");
      expect(result).toBe("fire");
    });

    it("should translate a three word phrase", async () => {
      const result = await translateFromSf("fyre est raifa");
      expect(result).toBe("fire [p] burn");
    });

    it("should translate unknown words with <unknown>", async () => {
      const result = await translateFromSf("notKnownWord");
      expect(result).toBe("<unknown>");
    });

    it("should translate case insensitive", async () => {
      const result = await translateFromSf("FyRE est rAIfa");
      expect(result).toBe("fire [p] burn");
    });

    it("should translate adjectives with additional suffix", async () => {
      const result = await translateFromSf("noicte fyre");
      expect(result).toBe("black fire");
    });
  });
});
