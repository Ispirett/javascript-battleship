import Player from './player'
import ShipManager from "./shipManager";
import Ship from "./ship";
import GameBoard from "./gameboard";

// Game loop
// 2 Gameboards
// 2 players
// 10 ships  5 each player
// 2 ship Managers
/*start game function => [
 while loop 1 loop until either player fleet is 0

] */

// endgame function
// Tracker to store all played moves

// Game steps
//   1 player sets board and adds name
//   2  player clicks play and game begins

const GameManager = (() => {
  // eslint-disable-next-line no-unused-vars
  //Global
  const markLogs = [];
  const p1Board = GameBoard();
  const p2Board = GameBoard();
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
      return p1Board
    };

    const playerTwoBoard = () => {
      return p2Board
    };

    return {
      playerOneBoard,
      playerTwoBoard
    }

  };
  const playerShips = () => {
    const playerOneShips = () => {
      const shipDetails =
        [{ letter: 'a', num: 4  , pos: 'down', shipLength: 3 },
        { letter: 'b', num: 2, pos: 'right', shipLength: 3 },
        { letter: 'j', num: 9, pos: 'up', shipLength: 2 },
        { letter: 'e', num: 5, pos: 'up', shipLength: 2 },
        { letter: 'g', num: 1, pos: 'down', shipLength: 1 }
        ];

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

export default GameManager;

