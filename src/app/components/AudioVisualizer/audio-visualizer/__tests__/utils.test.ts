import { Utils } from "../renderer/utils";

describe("Utils", () => {
  describe("fractionate", () => {
    it("should return normalized value between 0 and 1", () => {
      expect(Utils.fractionate(5, 0, 10)).toBe(0.5);
      expect(Utils.fractionate(10, 0, 10)).toBe(1);
      expect(Utils.fractionate(0, 0, 10)).toBe(0);
    });
  });

  describe("modulate", () => {
    it("should modulate input value within a new range", () => {
      expect(Utils.modulate(5, 0, 10, 0, 100)).toBe(50);
      expect(Utils.modulate(10, 0, 10, 0, 100)).toBe(100);
      expect(Utils.modulate(0, 0, 10, 0, 100)).toBe(0);
    });
  });

  describe("avg", () => {
    it("should calculate the average of an array of numbers", () => {
      expect(Utils.avg([1, 2, 3, 4, 5])).toBe(3);
      expect(Utils.avg([10, 20])).toBe(15);
    });

    it("should handle empty arrays gracefully", () => {
      expect(Utils.avg([])).toBeNaN();
    });
  });

  describe("max", () => {
    it("should find the maximum value in an array", () => {
      expect(Utils.max([1, 2, 3, 4, 5])).toBe(5);
      expect(Utils.max([-1, -2, -3, -4, -5])).toBe(-1);
    });

    it("should handle single-element arrays", () => {
      expect(Utils.max([7])).toBe(7);
    });
  });
});
