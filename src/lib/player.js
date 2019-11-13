const Player = name => {
    const playerName = () => name;

    const randomNum = () => Math.round(Math.random() * 9);

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    const randomMove = () => {
        return {
            num: randomNum(),
            letter: letters[randomNum()]
        };
    };

    return {
        playerName,
        randomMove
    };
};

export default Player;