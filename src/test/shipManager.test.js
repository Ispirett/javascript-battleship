import ShipManager from '../lib/shipManager';
import GameBoard from '../lib/gameboard';
import Ship from '../lib/ship';

describe('testing shipManager functionalities', () => {
  const shipManager = ShipManager();
  const gameBoard = GameBoard();
  const ship1 = Ship(3);
  const ship2 = Ship(2);
  const ship3 = Ship(1);
  const ship4 = Ship(3);
  const ship5 = Ship(3);
  const ship1pos = gameBoard.placeShip({ letter: 'b', num: 3, pos: 'right', shipLength: ship1.shipLength() }).shipPosition;
  const ship2pos = gameBoard.placeShip({ letter: 'c', num: 4, pos: 'down', shipLength: ship2.shipLength() }).shipPosition;
  const ship3pos = gameBoard.placeShip({ letter: 'g', num: 2, pos: 'left', shipLength: ship3.shipLength() }).shipPosition;
  const ship4pos = gameBoard.placeShip({ letter: 'a', num: 7, pos: 'up', shipLength: ship4.shipLength() }).shipPosition;
  const ship5pos = gameBoard.placeShip({ letter: 'j', num: 8, pos: 'left', shipLength: ship5.shipLength() }).shipPosition;
  test('ships should return an array of all added ships', () => {
    expect(shipManager.addShip(ship1, ship1pos)).toBe(1);
    expect(shipManager.addShip(ship2, ship2pos)).toBe(2);
    expect(shipManager.addShip(ship3, ship3pos)).toBe(3);
    expect(shipManager.addShip(ship4, ship4pos)).toBe(4);
    expect(shipManager.addShip(ship5, ship5pos)).toBe(5);
  });
  test('shipTracker should remove a ship if ship was sunk', () => {
    //console.log(shipManager.ships());
    const attackDetail1 = [{letter: 'b', num: 3}, {letter: 'c', num: 3}, {letter: 'd', num: 3}];
    const attackDetail2 = [{letter: 'c', num: 4}, {letter: 'c', num: 5}];
    const attackDetail3 = [{letter: 'g', num: 2}];
    const attackDetail4 = [{letter: 'a', num: 7}, {letter: 'a', num: 6}, {letter: 'a', num: 5}];
    const attackDetail5 = [{letter: 'j', num: 8}, {letter: 'i', num: 8}, {letter: 'h', num: 8}];
   // console.log(gameBoard.board)
    expect(shipManager.ships().length).toBe(5);
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail1[0]));
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail1[1]));
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail1[2]));
    expect(shipManager.ships().length).toBe(4);
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail2[0]));
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail2[1]));
    expect(shipManager.ships().length).toBe(3);
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail3[0]));
    expect(shipManager.ships().length).toBe(2);
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail4[0]));
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail4[1]));
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail4[2]));
    expect(shipManager.ships().length).toBe(1);
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail5[0]));
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail5[1]));
    shipManager.shipTracker(gameBoard.recieveAttack(attackDetail5[2]));
    expect(shipManager.ships().length).toBe(0);
  });
});