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

describe("testing ship placement functionality", () => {
    const playerBoard = Gameboard();
    test("should add a ship of 3 to the board", () => {
        playerBoard.placeShip({ letter: "a", num: 0, pos: "down", shipLength: 3 });
        expect(playerBoard.slot("a", 0)).toBe("S");
        expect(playerBoard.slot("a", 1)).toBe("S");
        expect(playerBoard.slot("a", 2)).toBe("S");
    });

    test("should return error if slot is already taken", () => {
        expect(
            playerBoard.placeShip({ letter: "a", num: 0, pos: "down", shipLength: 3 })
        ).toBe("position taken");
    });
});