import GameManager from './GameManager';
import spare from 'sparetime.js';
spare();

// Setup Board
// Display ships on board =>  Add color class to element when S is matched
// Allow player to update ship position board
// Create update Loop
// Player one should be able to attack
// Player two should be able to attack
// Update board after attack
// repeat attack until one player ship fleet is demolished

const GUI = (() => {
  const p1Board = GameManager.boardManager().playerOneBoard();
  const p2Board = GameManager.boardManager().playerTwoBoard();
  const p1Ships = GameManager.playerShips().playerOneShips();
  const p2Ships = GameManager.playerShips().playerTwoShips();
  let p1 = null;
  const p2 =  GameManager.playerManager().playerTwo();



  const playerBoards = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const p1Container = Spare.sel('#player').element;
    const p2Container = Spare.sel('#player-two').element;
 /// lettter  a num 0 , b num 0
    letters.forEach((letter) => {
      p1Board.board[letter].forEach((num, index) => {


        const square = Spare.create('div')
          .attr('data-letter', letter)
          .attr('data-number', index)
          .attr('id', `${letter}-${index}`).attr('class','slot' )
          .element;
        p1Container.append(square);

      });
      p2Board.board[letter].forEach((num, index_two) => {
        const square = Spare.create('div')
          .attr('data-letter', letter)
          .attr('data-number', index_two)
          .attr('id', `${letter}-${index_two}-2`).attr('class', 'slot_two')
          .element;
        p2Container.append(square);
      });
    });
  };

  const displayPLayerInfo = (() =>{
    const setPlayerNames = () =>
    {
      const p1name = Spare.sel('#p1-name').element;
      const p2name = Spare.sel('#p2-name').element;
      // const nameInput = Spare.sel('#name-input').value()
      p1 = GameManager.playerManager().playerOne('Destroyer');
      p1name.innerText = p1.playerName();
      p2name.innerText = p2.playerName();
      return{
        scores
      }
    };

    const scores = () =>{
      const p1score = Spare.sel('#p1-score').element;
      const p2score = Spare.sel('#p2-score').element;
      p1score.innerText = `${p1Ships.ships().length}  ships`;
      p2score.innerText = `${p2Ships.ships().length}  ships`;
    };
    return{
      setPlayerNames,
      scores
    }
  })();

  const boardSlots = (className,callback) =>{
    const ships = document.querySelectorAll(`.${className}`);
    ships.forEach( slot =>{
      const letter = slot.getAttribute('data-letter');
      const num = slot.getAttribute('data-number');
      callback({letter,num, slot});
    })
  };

  const shipSetup = () =>{
    boardSlots('slot',(props) =>{
      if(p1Board.slot(props.letter,props.num) === "S"){
        props.slot.classList.add('blue')
      }
    });
    boardSlots('slot_two',(props) =>{
      if(p2Board.slot(props.letter,props.num) === "S"){
        props.slot.classList.add('blue')
      }
    })

  };

 const handleAttack = () =>{
    boardSlots('slot_two',props => {
      props.slot.onclick = (e) =>{
       p2Ships.shipTracker(

           p2Board.recieveAttack({letter:props.letter,num:props.num}), ishit =>{
             if(ishit === 'hit'){
               console.log("hit");
               e.target.classList.add('red')
             }
             else if(ishit === 'miss') {
               console.log("miss");
               e.target.classList.add('brown')
             }
           });
         }
    })
 };




  return {
    handleAttack,
    shipSetup,
    playerBoards,
    displayPLayerInfo
  };

})();

export default GUI;