const calc = require("./calculator");

describe("calculator", () => {
  // Test case: Addition
  it("should return the correct sum of two numbers", () => {
    expect(calc(2, "+", 3)).toBe(5);
  });

  // Test case: Subtraction
  it("should return the correct difference of two numbers", () => {
    expect(calc(5, "-", 2)).toBe(3);
  });

  // Test case: Multiplication
  it("should return the correct product of two numbers", () => {
    expect(calc(4, "*", 6)).toBe(24);
  });

  // Test case: Division
  it("should return the correct quotient of two numbers", () => {
    expect(calc(10, "/", 2)).toBe(5);
  });

  // Test case: Division by zero
  it("should throw an error when dividing by zero", () => {
    expect(() => calc(6, "/", 0)).toThrow("Division by zero");
  });

  // Test case: Negative numbers
  it("should handle negative numbers correctly", () => {
    expect(calc(-8, "+", 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it("should handle decimal numbers correctly", () => {
    expect(calc(3.5, "*", 2)).toBe(7);
  });

  // Test case: Order of operations
  it("should follow the correct order of operations", () => {
    expect(calc(2, "+", 3, "*", 4)).toBe(14);
  });

  // Test case: Invalid operator
  it("should throw an error for an invalid operator", () => {
    expect(() => calc(5, "$", 3)).toThrow("Invalid operator");
  });

  // Test case: Invalid input type
  it("should throw an error for invalid input types", () => {
    expect(() => calc("2", "+", 3)).toThrow("Invalid input type");
  });
});

// More test cases
describe("calculator", () => {
  it("should allow calc to handle an unknown amount of numbers", () => {
    expect(calc(2, "+", 3, "+", 4)).toBe(9);
  });

  it("should ignore numbers bigger than 1000", () => {
    expect(calc(1001, "+", 2)).toBe(2);
  });

  it("should handle multiple operators correctly", () => {
    expect(calc(8, "+", 3, "*", 4, "-", 5)).toBe(15);
  });

  it("should allow calc to handle an unknown amount of numbers with negative result", () => {
    expect(calc(5, "-", 3, "*", 4)).toBe(-7);
  });

  it("should throw an error for invalid input types", () => {
    expect(() => calc("26", "+", "3", "*", 4, "-", 3)).toThrow(
      "Invalid input type"
    );
  });

  it("should ignore the operand with value greater than 1000", () => {
    expect(calc(2023, "+", 3, "*", 4, "-", 5, "/", 2, "*", 3)).toBe(4.5);
  });

  it("should result the same inserted value when we insert just one operand", () => {
    expect(calc(5)).toBe(5);
  });

  it("should ignore the operand with value greater than 1000", () => {
    expect(calc(2, "+", 1008, "*", 4, "-", 5, "/", 2, "*", 3)).toBe(-1.5);
  });

  it("should respect the mathematical order of operations", () => {
    expect(calc(2, "-", 3, "*", 6, "-", 0, "/", 2, "*", 3)).toBe(-16);
  });

  it("should ignore the operand with value greater than 1000", () => {
    expect(calc(2, "+", 3, "*", 4, "-", 1005, "/", 2, "*", 3)).toBe(12.5);
  });
});
