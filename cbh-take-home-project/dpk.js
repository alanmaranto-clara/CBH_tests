const crypto = require("crypto");

const getCandidate = (event) => {
  let candidate = null;
  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }
  return candidate;
};

const stringifyCandidate = (candidate, trivialPartitionKey) => {
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = trivialPartitionKey;
  }
  return candidate;
};

const updateHash = (candidate, maxPartitionKeyLength) => {
  if (candidate.length > maxPartitionKeyLength) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = getCandidate(event);
  candidate = stringifyCandidate(candidate, TRIVIAL_PARTITION_KEY);
  candidate = updateHash(candidate, MAX_PARTITION_KEY_LENGTH);
  return candidate;
};
