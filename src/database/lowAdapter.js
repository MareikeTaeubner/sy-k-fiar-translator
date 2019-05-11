export const adapter = {
  serialize: JSON.stringify,
  deserialize: JSON.parse,
  defaultValue: {},
  async read() {
    const response = await fetch("https://api.myjson.com/bins/19gxxa");
    return await response.json();
  },
  async write(data) {
    await fetch("https://api.myjson.com/bins/19gxxa", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
