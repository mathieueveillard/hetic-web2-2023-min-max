import fc from "fast-check";
import minmax from ".";

test("", () => {
  expect(minmax({ min: 10, max: 20 }, () => 0)).toEqual(10);
});

test("", () => {
  expect(minmax({ min: 10, max: 20 }, () => 1)).toEqual(20);
});

test("The returned value should be comprised between min and max", () => {
  fc.assert(
    fc.property(fc.nat(), fc.nat(), (min, max) => {
      fc.pre(min <= max);
      const result = minmax({ min, max }, Math.random);
      return min <= result && result <= max;
    })
  );
});
