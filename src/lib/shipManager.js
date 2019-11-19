// ship array , each ship has an index

// index 0
//  a b c d
//  S
//  S
//  X
// eslint-disable-next-line no-unused-vars
const ShipManager = () => {
  let shipArray = [];
  const ships = () => shipArray;

  const addShip = (ship, shipPos) => {
    shipArray.push({ ship, shipPos });
    return ships().length;
  };

  const updateShipPos = (index, newShipPos) =>{
    shipArray[index].shipPos =  newShipPos
  };

  const removeShip = (index) => {
    shipArray.splice(index, 1);
    return true
  };

  const shipTracker = (reciveAttack) => {
    ships().forEach((e, index) => {
      //get access to ship positions
      e.shipPos.forEach(sp => {
        if (reciveAttack.msg === 'ship') {
          if (sp.letter === reciveAttack.result.letter && sp.num === reciveAttack.result.num) {
            if (e.ship.hit() === e.ship.shipLength()) {
              console.log(true);
              removeShip(index);
            }
          }
        }
      })
    })

  };

  return {
    ships,
    addShip,
    shipTracker,
    updateShipPos
  }
};

export default ShipManager
// loop through ships an match object and update ship length
// eslint-disable-next-line no-unused-vars