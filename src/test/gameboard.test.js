import Gameboard from "../lib/gameboard.js";

describe("testing board setup", () => {
  test("board should be initialized properly", () => {
    expect(Gameboard().slot("a", 9)).toBe(10);
    expect(Gameboard().slot("b", 1)).toBe(2);
    expect(Gameboard().slot("j", 3)).toBe(4);
  });
});

describe("Recieve attack functionalities", () => {
  const playerOne = Gameboard();
  test("spot should be marked as position taken", () => {
    playerOne.recieveAttack({ letter: "a", num: 1 });
    playerOne.recieveAttack({ letter: "j", num: 9 });
    expect(playerOne.recieveAttack({ letter: "a", num: 1 })).toEqual(
      "position taken"
    );

    expect(playerOne.recieveAttack({ letter: "j", num: 9 })).toEqual(
      "position taken"
    );
  });

  test("Ensure board is being updated when player plays", () => {
    expect(playerOne.recieveAttack({ letter: "b", num: 1 })).toEqual({
      hit: "b",
      pos: "X"
    });
  });
});

describe("testing ship placement functionality right", () => {
  const playerBoard = Gameboard();
  test("should add a ship of 3 to the board", () => {
    playerBoard.placeShip({ letter: "b", num: 4, pos: "right", shipLength: 3 });
    expect(playerBoard.slot("b", 4)).toBe("S");
    expect(playerBoard.slot("c", 4)).toBe("S");
    expect(playerBoard.slot("d", 4)).toBe("S");
  });

  test("should add a ship of 2 to the board", () => {
    playerBoard.placeShip({ letter: "c", num: 5, pos: "right", shipLength: 2 });
    expect(playerBoard.slot("c", 5)).toBe("S");
    expect(playerBoard.slot("d", 5)).toBe("S");
  });

  test("should add a ship of 1 to the board", () => {
    playerBoard.placeShip({ letter: "c", num: 6, pos: "right", shipLength: 1 });
    expect(playerBoard.slot("c", 6)).toBe("S");
  });

  test("should add a ship  at the end of the  board", () => {
    playerBoard.placeShip({ letter: "i", num: 6, pos: "right", shipLength: 2 });
    expect(playerBoard.slot("i", 6)).toBe("S");
    expect(playerBoard.slot("j", 6)).toBe("S");
  });
});

describe("testing ship placement functionality left", () => {
  const playerBoardTwo = Gameboard();
  test("should add a ship of 3 to the board", () => {
    playerBoardTwo.placeShip({
      letter: "c",
      num: 4,
      pos: "left",
      shipLength: 3
    });
    expect(playerBoardTwo.slot("c", 4)).toBe("S");
    expect(playerBoardTwo.slot("b", 4)).toBe("S");
    expect(playerBoardTwo.slot("a", 4)).toBe("S");
  });

  test("should add a ship of 3 to the board", () => {
    playerBoardTwo.placeShip({
      letter: "b",
      num: 5,
      pos: "left",
      shipLength: 2
    });
    expect(playerBoardTwo.slot("b", 5)).toBe("S");
    expect(playerBoardTwo.slot("a", 5)).toBe("S");
  });

  test("should add a ship of 1 to the board", () => {
    playerBoardTwo.placeShip({
      letter: "a",
      num: 6,
      pos: "left",
      shipLength: 1
    });
    expect(playerBoardTwo.slot("a", 6)).toBe("S");
  });

  test("should add a ship of 1 to the board", () => {
    expect(
      playerBoardTwo.placeShip({
        letter: "b",
        num: 7,
        pos: "left",
        shipLength: 3
      })
    ).toEqual({ msg: "you can only place a ship of 2 length", result: false });
  });
});

describe("testing ship placement functionality down", () => {
  let newBoard = Gameboard();

  test("should add a ship of length 3 to the board down", () => {
    newBoard.placeShip({ letter: "c", num: 0, pos: "down", shipLength: 3 });
    newBoard.placeShip({ letter: "d", num: 3, pos: "down", shipLength: 3 });
    expect(newBoard.slot("c", 0)).toBe("S");
    expect(newBoard.slot("c", 1)).toBe("S");
    expect(newBoard.slot("c", 2)).toBe("S");
    expect(newBoard.slot("d", 3)).toBe("S");
    expect(newBoard.slot("d", 4)).toBe("S");
    expect(newBoard.slot("d", 5)).toBe("S");
  });

  test("should add a ship of length 2 to the board down", () => {
    newBoard.placeShip({ letter: "e", num: 3, pos: "down", shipLength: 2 });
    expect(newBoard.slot("e", 3)).toBe("S");
    expect(newBoard.slot("e", 4)).toBe("S");
  });
  test("should add a ship of length 2 to the board down", () => {
    newBoard.placeShip({ letter: "j", num: 3, pos: "down", shipLength: 1 });
    expect(newBoard.slot("j", 3)).toBe("S");
  });

  test("should not add ship of length 3 ", () => {
    expect(
      newBoard.placeShip({ letter: "j", num: 9, pos: "down", shipLength: 3 })
        .result
    ).toEqual(false);
  });
  test("should not add ship of length 2", () => {
    expect(
      newBoard.placeShip({ letter: "j", num: 9, pos: "down", shipLength: 2 })
        .result
    ).toEqual(false);
  });
});

describe("testing ship placement functionality up", () => {
  let newBoard = Gameboard();

  test("should add a ship of length 3 to the board up", () => {
    newBoard.placeShip({ letter: "c", num: 3, pos: "up", shipLength: 3 });
    newBoard.placeShip({ letter: "d", num: 4, pos: "up", shipLength: 3 });
    expect(newBoard.slot("c", 3)).toBe("S");
    expect(newBoard.slot("c", 2)).toBe("S");
    expect(newBoard.slot("c", 1)).toBe("S");
    expect(newBoard.slot("d", 4)).toBe("S");
    expect(newBoard.slot("d", 3)).toBe("S");
    expect(newBoard.slot("d", 2)).toBe("S");
  });

  test("should add a ship of length 2 to the board up", () => {
    newBoard.placeShip({ letter: "e", num: 3, pos: "up", shipLength: 2 });
    expect(newBoard.slot("e", 3)).toBe("S");
    expect(newBoard.slot("e", 2)).toBe("S");
  });
  test("should add a ship of length 1 to the board up", () => {
    newBoard.placeShip({ letter: "j", num: 3, pos: "up", shipLength: 1 });
    expect(newBoard.slot("j", 3)).toBe("S");
  });

  test("should not add ship of length 3 ", () => {
    expect(
      newBoard.placeShip({ letter: "j", num: 0, pos: "up", shipLength: 3 })
        .result
    ).toEqual(false);
  });
  test("should not add ship of length 2", () => {
    expect(
      newBoard.placeShip({ letter: "j", num: 0, pos: "up", shipLength: 2 })
        .result
    ).toEqual(false);
  });
});

describe("testing getting ship cordinates", () => {
  const newBoard = Gameboard();
  test("should  return the ships position ship length 3", () => {
    expect(
      newBoard.placeShip({ letter: "j", num: 8, pos: "left", shipLength: 3 })
        .shipPosition
    ).toEqual([
      { letter: "j", num: 8 },
      { letter: "i", num: 8 },
      { letter: "h", num: 8 }
    ]);
  });
  test("should  return the ships position ship length 2", () => {
    expect(
      newBoard.placeShip({ letter: "j", num: 7, pos: "left", shipLength: 2 })
        .shipPosition
    ).toEqual([{ letter: "j", num: 7 }, { letter: "i", num: 7 }]);
  });
    test("should  return the ships position ship length 2", () => {
        expect(
            newBoard.placeShip({ letter: "j", num: 6, pos: "left", shipLength: 1 })
                .shipPosition
        ).toEqual([{ letter: "j", num: 6 }]);
    });
});
