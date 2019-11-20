import Ship from "../lib/ship";
describe("testing ship functionalities", () => {
   test("shipLength should return the length of the ship", () => {
       expect(Ship(4).shipLength()).toBe(4);
   });
   test("ship object does not allow a ship with a length higher than 4 be created", () => {
       expect(Ship(5).shipLength()).toBe(4);
   });
   test("hit should return the number of hits taken by the ship", () => {
       const newShip = Ship(3);
       expect(newShip.hit()).toBe(1);
       expect(newShip.hit()).toBe(2);
       expect(newShip.hit()).toBe(3);
   });
   test("hit should return undefined if the ship was sank", () => {
       const newShip = Ship(1);
       newShip.hit();
       expect(newShip.hit()).toBe(undefined);
   });
   test("isSunk should return false if the ship did not took enough hits to sink", () => {
       expect(Ship(3).isSunk()).toBe(false);
   });
   test("isSunk should return true if the ship took enough hits to sink", () => {
       const newShip = Ship(1);
       newShip.hit();
       expect(newShip.isSunk()).toBe(true);
   });
});