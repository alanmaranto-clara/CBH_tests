const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Return the candidate with the partition event key", () => {
    const event = {
      partitionKey: "1"
    }
    expect(deterministicPartitionKey(event)).toBe("1");
  });
  //  it("Return the candidate with the partitionKey");
});
