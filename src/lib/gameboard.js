const GameBoard = () => {
    const board = {};
    const shipMark = "S";
    const boardHit = "X";

    const setup = () => {
        const alpha = "abcdefghij";
        alpha
            .split("")
            .forEach(mark => (board[mark] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    };
    setup();

    const slot = (letter, num) => board[letter][num];

    const Constraints = (() => {
        // eslint-disable-next-line no-unused-vars
        const slotTaken = (l, n) =>
            /[SX]/.test(slot(l, n)) ? "position taken" : 0;
        return {
            slotTaken
        };
    })();

    const recieveAttack = details => {
        const { letter, num } = details;
        const pos = slot(letter, num);

        // eslint-disable-next-line no-unused-vars
        let updatePos = board[letter];
        if (/[\d]/.test(pos)) {
            if (pos === shipMark) {
                updatePos[num] = boardHit;
                return { hit: letter, pos: updatePos[num] };
            } else {
                updatePos[num] = boardHit;
                return { hit: letter, pos: updatePos[num] };
            }
        } else {
            return "position taken";
        }
    };

    const placeShip = details => {
        // pos should be left right up or down
        let { letter, num, pos, shipLength } = details;

        Constraints.slotTaken(letter, num);

        if (num === 9 && shipLength > 1) {
            if (slot(letter, num) !== "S") {
                num = 0;
                pos = "down";
            }
        }

        if (letter === "a" && /[0-8]/.test(num) && /down|right/.test(pos)) {
            for (let i = 0; i < shipLength; i++) {
                board[letter][num] = shipMark;
                num += 1;
            }
        } else {
            return "pos";
        }
    };

    return {
        board,
        recieveAttack,
        placeShip,
        slot
    };
};

export default GameBoard;