const generateUniqueID = require("../../src/utils/generateUniqueID");

describe("Generate Unique ID", () => {
  it("should generate an unique id with 8 of length", () => {
    const id = generateUniqueID();
    expect(id).toHaveLength(8);
  });
});
