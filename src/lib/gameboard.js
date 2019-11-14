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

  const Logger = (msg,result) =>{
      return{
          msg,
          result
      }
  };



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
    const shipPosition = [];

    const assign = () => {
      if (shipLength <= counter) {
        for (let i = 0; i < shipLength; i++) {
            if (/left|right/.test(pos)) {
                board[alpha[index]][num] = shipMark;
                shipPosition.push({letter:alpha[index], num});
                if (pos === "right") {
                    index += 1;
                } else if (pos === "left") {
                    index -= 1;
                }

            }
            if(/up|down/.test(pos)) {
                board[letter][num] = shipMark;
                shipPosition.push({letter, num});
                if (pos === 'down'){
                    num++
                }
                else if (pos === 'up'){
                    num--
                }
            }

        }
        const log = Logger('success', true);
        return {
            log,
            shipPosition
        }
      } else {
        return Logger(`you can only place a ship of ${counter} length` , false);
      }
    };

    const leftRight = () => {
        let currentIndex = index;
      if (pos === "right") {
        for (let i = 0; i < 3; i++) {
          if (alpha[currentIndex] !== undefined) {
            if (slot(alpha[currentIndex], num) !== "S") {
              counter++;
              currentIndex++;
            }
          }
        }
      } else if (pos === "left") {
        for (let i = 3; i >= 0; i--) {
          if (alpha[currentIndex] !== undefined) {
            if (slot(alpha[currentIndex], num) !== "S") {
              counter++;
              currentIndex -= 1;
            }
          }
        }
      }
    };

    const upDown = () => {
        let currentNum = num;
        if (pos === "down") {
            for (let i = 0; i < 3; i++) {
                if (slot(letter, currentNum) >= 0) {
                    if (slot(letter, currentNum) !== "S") {
                        counter++;
                        currentNum++;
                    }
                    else{
                        return false;
                    }
                }
            }
        }
        else if (pos ==='up'){
            for (let i = 3; i >= 0; i--) {
                if (slot(letter, currentNum) >= 0) {
                    if (slot(letter, currentNum) !== "S") {
                        counter++;
                        currentNum--;
                    }
                }
            }
        }
    };

    leftRight();
    upDown();
    return assign();
  };

  return {
    board,
    recieveAttack,
    placeShip,
    slot
  };
};

export default GameBoard;
