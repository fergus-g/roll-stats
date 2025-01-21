import { test, expect } from "vitest";
import { rollStandardArray } from "./index.js";

test("calling roll standard array returns a shuffled array", () => {
  // Arrange
  let standardArray = [15, 14, 13, 12, 10, 8];

  // Act
  let result = rollStandardArray();

  // Assert
  expect(result).toHaveLength(standardArray.length);
  expect(result).toEqual(expect.arrayContaining(standardArray));
  expect(result).not.toEqual(standardArray);
});
