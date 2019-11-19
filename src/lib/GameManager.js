import Player from  './player'
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
    const markLogs =  [];

    // eslint-disable-next-line no-unused-vars
  const playerManager = () =>{
      const playerOne = (name) => Player(name);
      const playerTwo = (name = "Magnetron") => Player(name);
      return{
          playerOne,
          playerTwo
      }
  };
  const boardManager = () =>{
      const playerOneBoard = () =>{
         return  GameBoard()
      };

      const playerTwoBoard = () =>{
          return GameBoard()
      };

      return {
          playerOneBoard,
          playerTwoBoard
      }

  };
  const playerShips = () =>{
      const playerOneShips = () =>{
          const shipDetails =
                  [{letter: 'a', num: 1, pos: 'down', shipLength: 3},
                  {letter: 'b', num: 2, pos: 'right', shipLength: 3},
                  {letter: 'j', num: 9, pos: 'up', shipLength: 2},
                  {letter: 'e', num: 3, pos: 'up', shipLength: 2},
                  {letter: 'd', num: 1, pos: 'down', shipLength: 1}
                  ];
          const p1Board = boardManager();
          const p1Fleet = ShipManager();
          shipDetails.forEach((e,i) =>{
              p1Fleet.addShip(Ship(e.shipLength),p1Board.placeShip(shipDetails[i]).shipPosition );
          });
          return p1Fleet
      };

      const playerTwoShips = () =>{
          const playerOneShips = () =>{
              const shipDetails =
                  [{letter: 'a', num: 1, pos: 'down', shipLength: 3},
                      {letter: 'b', num: 2, pos: 'right', shipLength: 3},
                      {letter: 'j', num: 9, pos: 'up', shipLength: 2},
                      {letter: 'e', num: 3, pos: 'up', shipLength: 2},
                      {letter: 'd', num: 1, pos: 'down', shipLength: 1}
                  ];
              const p2Board = boardManager().playerTwoBoard();
              const p2Fleet = ShipManager();
              shipDetails.forEach((e,i) =>{
              p2Fleet.addShip(Ship(e.shipLength),p2Board.placeShip(shipDetails[i]).shipPosition );
             });

              return p2Fleet
          };
      };
      return {
          playerOneShips,
          playerTwoShips
      }

  };

  const playerSwitcher = () =>{
       let turn =  2;
       turn % 2 === 0 ? playerManager().playerOne(): playerManager().playerTwo()
       turn++;
      return turn
  };

  // Utils
  const AttackLogger = (name,position) => {
      markLogs.push({name,position})
  }

})();

