const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Return the candidate with the partition event key", () => {
    const event = {
      partitionKey: "1",
    };
    expect(deterministicPartitionKey(event)).toBe("1");
  });
  it("Return the candidate without the partitionKey", () => {
    const event = {};
    const expectedValue = deterministicPartitionKey(event);
    expect(expectedValue && typeof expectedValue === "string").toBe(true);
  });
  it("Return the candidate stringyfied", () => {
    const event = {
      partitionKey: 1,
    };
    const expectedValue = deterministicPartitionKey(event);
    expect(expectedValue && typeof expectedValue === "string").toBe(true);
  });
  it("Return the candidate with trivialpartition key", () => {
    const event = {
      partitionKey: "100",
    };
    expect(deterministicPartitionKey(event)).toBe("100");
  });
  it("Return the candidate hashed", () => {
    const event = {
      partitionKey: 257,
    };
    expect(deterministicPartitionKey(event)).toBe("257");
  });
});
