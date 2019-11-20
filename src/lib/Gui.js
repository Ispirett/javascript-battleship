import GameManager from './GameManager';
import spare from 'sparetime.js';
spare();

const GUI = (() => {

  const playerBoards = () => {
    const p1Board = GameManager.boardManager().playerOneBoard().board;
    const p2Board = GameManager.boardManager().playerTwoBoard().board;

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    const p1Container = Spare.sel('#player').element;
    const p2Container = Spare.sel('#player-two').element;

    letters.forEach((letter) => {
      p1Board[letter].forEach((num) => {
        const square = Spare.create('div')
          .attr('data-letter', letter)
          .attr('data-number', num)
          .attr('id', `${letter}-${num}`)
          .element;
        p1Container.append(square);

      });
      p2Board[letter].forEach((num) => {
        const square = Spare.create('div')
          .attr('data-letter', letter)
          .attr('data-number', num)
          .attr('id', `${letter}-${num}-2`)
          .element;
        p2Container.append(square);
      });
    });


  }
  return {
    playerBoards
  };
})();

export default GUI;