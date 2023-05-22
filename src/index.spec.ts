import fc from "fast-check";
import random from ".";

// 'Classical' test-driven development; requires dependency injection
test("", () => {
  expect(random({ min: 10, max: 20 }, () => 0)).toEqual(10);
});

test("", () => {
  expect(random({ min: 10, max: 20 }, () => 1)).toEqual(20);
});

// Property-based testing
test("The result should be comprised between min and max boundaries", () => {
  fc.assert(
    fc.property(fc.nat(), () => {
      const result = random({ min: 10, max: 20 }, Math.random);
      return 10 <= result && result <= 20;
    })
  );
});

test("The result should be comprised between min and max boundaries", () => {
  fc.assert(
    fc.property(fc.nat(), fc.nat(), (min, max) => {
      fc.pre(min <= max);
      const result = random({ min, max }, Math.random);
      return min <= result && result <= max;
    })
  );
});
