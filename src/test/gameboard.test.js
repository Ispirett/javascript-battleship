import Gameboard from "../lib/gameboard.js";

describe("testing board functionalities", () => {
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
        playerBoardTwo.placeShip({ letter: "c", num: 4, pos: "left", shipLength: 3 });
        expect(playerBoardTwo.slot("c", 4)).toBe("S");
        expect(playerBoardTwo.slot("b", 4 )).toBe("S");
        expect(playerBoardTwo.slot("a", 4)).toBe("S");
    });

    test("should add a ship of 3 to the board", () => {
        playerBoardTwo.placeShip({ letter: "b", num: 5, pos: "left", shipLength: 2 });
        expect(playerBoardTwo.slot("b", 5)).toBe("S");
        expect(playerBoardTwo.slot("a", 5 )).toBe("S");
    });

    test("should add a ship of 1 to the board", () => {
        playerBoardTwo.placeShip({ letter: "a", num: 6, pos: "left", shipLength: 1 });
        expect(playerBoardTwo.slot("a", 6 )).toBe("S");
    });

    test("should add a ship of 1 to the board", () => {
        expect(playerBoardTwo.placeShip(
            { letter: "b", num: 7, pos: "left", shipLength: 3 })).toEqual(undefined);

    });





    //
    // test("should add a ship of 1 to the board", () => {
    //     playerBoard.placeShip({ letter: "c", num: 6, pos: "right", shipLength: 1 });
    //     expect(playerBoard.slot("c", 6)).toBe("S");
    //
    // });
    //
    // test("should add a ship  at the end of the  board", () => {
    //     playerBoard.placeShip({ letter: "i", num: 6, pos: "right", shipLength: 2 });
    //     expect(playerBoard.slot("i", 6)).toBe("S");
    //     expect(playerBoard.slot("j", 6)).toBe("S");
    // });

});