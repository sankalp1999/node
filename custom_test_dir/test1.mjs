import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';

describe("math", () => {
    it("addition",async () => {
      deepStrictEqual(1 + 1, 2);
    });
    it("subtraction",async () => {
      deepStrictEqual(1 + 4, 2);
    });
  });

  describe("science", () => {
    it("photosynthesis",async () => {
      deepStrictEqual(1 + 1, 2);
    });
  });

// describe('A thing', () => {
//   it('should work',async () => {
//     deepStrictEqual(1, 1);
//   });

//   it('should be ok',async () => {
//     deepStrictEqual(2, 2);
//   });

//   describe('a nested thing', () => {
//     it('should work',async () => {
//       deepStrictEqual(3, 3);
//     });
//   });
// }); 