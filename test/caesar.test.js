// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Testing Encoding", () => {
  it('Should return "whvw"', () => {
    const actual = caesar("Test", 3);
    const expected = "whvw";
    expect(actual).to.equal(expected);
  });
});

describe("Testing Encoding Negative", () => {
  it('Should return "qbpq"', () => {
    const actual = caesar("Test", -3);
    const expected = "qbpq";
    expect(actual).to.equal(expected);
  });
});

describe("Decoding ", () => {
  it('Should return "test"', () => {
    const actual = caesar("whvw", 3, false);
    const expected = "test";
    expect(actual).to.equal(expected);
  });
});

describe("Testing Spaces and Special Characters", () => {
  it('Should return "whvwlqj wr fkhfn vsdfhv dqg vshfldo fkdudfwhuv &$"', () => {
    const actual = caesar("testing to check spaces and special characters &$",3);
    const expected = "whvwlqj wr fkhfn vsdfhv dqg vshfldo fkdudfwhuv &$";
    expect(actual).to.equal(expected);
  });
});
describe("Decoding spaces and special characters", () => {
  it('Should return "this is a secret message!"', () => {
    const actual = caesar("xiwxmrk xs gligo wtegiw erh wtigmep glevegxivw &$", 4, false);
    const expected = "testing to check spaces and special characters &$";
    expect(actual).to.equal(expected);
  });
});
describe("No parameters", () => {
  it('Should return "false"', () => {
    const actual = caesar("no parameters");
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
describe("greater than 25", () => {
  it('Should return "false"', () => {
    const actual = caesar("greater than 25", 99);
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
describe("less than -25", () => {
  it('Should return "false"', () => {
    const actual = caesar("less than negative 25", -26);
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
