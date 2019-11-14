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
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let index = alpha.indexOf(letter);
    let counter = 0;
    const assign = () => {
      if (shipLength <= counter) {
        index = alpha.indexOf(letter);
        for (let i = 0; i < shipLength; i++) {
            if (/left|right/.test(pos)) {
                board[alpha[index]][num] = shipMark;
                if (pos === "right") {
                    index += 1;
                } else if (pos === "left") {
                    index -= 1;
                }
            }
            else {
                board[letter][num] = shipMark;
                if (pos === 'up'){
                    num++
                }
                else if (pos === 'down'){
                    num--
                }
            }
        }
      } else {
        return `you can only place a ship of `;
      }
    };
    const leftRight = () => {
      if (pos === "right") {
        for (let i = 0; i < 3; i++) {
          if (alpha[index] !== undefined) {
            if (slot(alpha[index], num) !== "S") {
              counter++;
              index++;
            }
          }
        }
      } else if (pos === "left") {
        for (let i = 3; i >= 0; i--) {
          if (alpha[index] !== undefined) {
            if (slot(alpha[index], num) !== "S") {
              counter++;
              index -= 1;
            }
          }
          else if(alpha[index] === undefined){
              return `Only ship length of ${counter} can go here`
          }
        }
      }
      assign();
    };

    const upDown = () => {
        if (pos === "down") {
            for (let i = 0; i < 3; i++) {
                if (slot(letter, num) !== undefined) {
                    if (slot(letter, num) !== "S") {
                        counter++;
                        num++;
                    }
                    else{
                        return false;
                    }
                }
            }
        }

        else if (pos ==='up'){
            for (let i = 3; i >= 0; i--) {
                if (slot(letter, num) !== undefined) {
                    if (slot(alpha[index], num) !== "S") {
                        counter++;
                        num--;
                    }
                }
            }
        }
        assign()
    };
    leftRight();
    upDown();

  };

  return {
    board,
    recieveAttack,
    placeShip,
    slot
  };
};

export default GameBoard;
