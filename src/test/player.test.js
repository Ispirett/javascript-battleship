import Player from "../lib/player";
describe("Test player functionalities", () => {
   const obj = Player("John").randomMove();
   test("playerName should return the given name when player object is created", () => {
       expect(Player("Mario").playerName()).toBe("Mario");
   });
   test("randomMove returns an object with 2 key value pairs", () => {
       expect(Object.keys(obj).length).toBe(2);
   });
   test("randomMove returned object has a key named num", () => {
       expect(obj.hasOwnProperty("num")).toBe(true);
   });
   test("key named num always have a value between 0 and 9", () => {
       const possibleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
       expect(possibleValues.includes(obj["num"])).toBe(true);
   });
   test("randomMove returned object has a key named letter", () => {
       expect(obj.hasOwnProperty("letter")).toBe(true);
   });
   test("key named letter always have a value between a and j", () => {
       const possibleValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
       expect(possibleValues.includes(obj["letter"])).toBe(true);
   });
});