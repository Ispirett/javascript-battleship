const Player = name => {
  const playerName = () => name;

  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  const createPossibleChoices = () => {
    const arrChoices = []
  
    letters.map((letter) => {
      for (let i = 0; i < 10; i++) {
        arrChoices.push(new Array(`${letter}`, i));
      }
    });
    return arrChoices;
  }
  
  const possibleChoices = createPossibleChoices();

  const randomMove = () => {
    const randomNum =  Math.round(Math.random() * (possibleChoices.length - 1));
    const value = possibleChoices.splice(randomNum, 1)[0];
    return {
      letter: value[0],
      num: value[1]
    };
  }
  
  return {
    playerName,
    randomMove
  };
};

export default Player;