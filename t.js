
const  alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let index = alpha.indexOf('i');

console.log(index);

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
      // let updatePos = board[letter];
        if (pos === shipMark) {
          updateBoard({letter, num, icon: boardHit});
          return  Logger('ship',{  letter, num });
        }
        if(/\d/.test(pos)) {
          updateBoard({letter, num, icon: boardHit });
          return Logger('X',{  letter, num  });
        }
        if(pos === boardHit){
            return false
        }
  
        return "position taken";
  
    };
  
      // eslint-disable-next-line no-unused-vars
    const updateBoard = (details) => {
        const {letter, num, icon} = details;
        board[letter][num] = icon
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
      slot,
      updateBoard
    };
  };

const GameManager = (() => {
    // eslint-disable-next-line no-unused-vars
    const markLogs = [];
  
    // eslint-disable-next-line no-unused-vars
    const playerManager = () => {
      const playerOne = (name) => Player(name);
      const playerTwo = (name = "Magnetron") => Player(name);
      return {
        playerOne,
        playerTwo
      }
    };
    const boardManager = () => {
      const playerOneBoard = () => {
        return GameBoard()
      };
  
      const playerTwoBoard = () => {
        return GameBoard()
      };
  
      return {
        playerOneBoard,
        playerTwoBoard
      }
  
    };
    const playerShips = () => {
      const playerOneShips = () => {
        const shipDetails =
          [{ letter: 'a', num: 1, pos: 'down', shipLength: 3 },
          { letter: 'b', num: 2, pos: 'right', shipLength: 3 },
          { letter: 'j', num: 9, pos: 'up', shipLength: 2 },
          { letter: 'e', num: 3, pos: 'up', shipLength: 2 },
          { letter: 'd', num: 1, pos: 'down', shipLength: 1 }
          ];
        const p1Board = boardManager();
        const p1Fleet = ShipManager();
        shipDetails.forEach((e, i) => {
          p1Fleet.addShip(Ship(e.shipLength), p1Board.placeShip(shipDetails[i]).shipPosition);
        });
        return p1Fleet
      };
  
      const playerTwoShips = () => {
        const shipDetails =
          [{ letter: 'a', num: 1, pos: 'down', shipLength: 3 },
          { letter: 'b', num: 2, pos: 'right', shipLength: 3 },
          { letter: 'j', num: 9, pos: 'up', shipLength: 2 },
          { letter: 'e', num: 3, pos: 'up', shipLength: 2 },
          { letter: 'd', num: 1, pos: 'down', shipLength: 1 }
          ];
        const p2Board = boardManager().playerTwoBoard();
        const p2Fleet = ShipManager();
        shipDetails.forEach((e, i) => {
          p2Fleet.addShip(Ship(e.shipLength), p2Board.placeShip(shipDetails[i]).shipPosition);
        });
  
        return p2Fleet
      };
      return {
        playerOneShips,
        playerTwoShips
      }
    };
  
    const playerSwitcher = () => {
      let turn = 2;
      const playerTurn = turn % 2 === 0 ? playerManager().playerOne() : playerManager().playerTwo()
      turn++;
      return {
        turn,
        playerTurn
      };
    };
  
    // Utils
    const AttackLogger = (name, position) => {
      markLogs.push({ name, position });
    }
  
    const play = () => {
      while (playerShips().playerOneShips().ships().length > 0
        && playerShips().playerTwoShips().ships().length > 0) {
          const currentPlayer = playerSwitcher();
        }
    }
  
    return {
      boardManager,
      playerManager,
      playerShips,
    }
  })();

  const GUI = (() => {

    const playerBoards = () => {
      const p1Board = GameManager.boardManager().playerOneBoard().board;
      const p2Board = GameManager.boardManager().playerTwoBoard().board;
  
      const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  
      const pContainer = Spare.sel('#player').element;
  
      letters.forEach((letter) => {
        p1Board[letter].forEach((num) => {
          const square = Spare.create('div')
            .attr('data-letter', letter).attr('data-number', num)
            .attr('id', `${letter}-${num}`)
            .element;
          pContainer.append(square);
          console.log(square);
        })
      });
    }
  
    return {
      playerBoards
    };
  })();
  
  GUI.playerBoards();

