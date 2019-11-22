const ShipManager = () => {
  let shipArray = [];
  const ships = () => shipArray;

  const addShip = (ship, shipPos) => {
    shipArray.push({ ship, shipPos });
    return ships().length;
  };

  const updateShipPos = (index, newShipPos) => {
    shipArray[index].shipPos = newShipPos;
  };

  const removeShip = index => {
    shipArray.splice(index, 1);
    return true;
  };

  const shipTracker = (reciveAttack, isHit, destroyed) => {
    if (reciveAttack.msg === "X") {
      try {
        return isHit("miss");
      } catch (e) {
        return e;
      }
    }
    ships().forEach((e, index) => {
      //get access to ship positions
      e.shipPos.forEach(sp => {
        if (reciveAttack.msg === "ship") {
          if (
            sp.letter === reciveAttack.result.letter &&
            sp.num === Number(reciveAttack.result.num)
          ) {
            try {
              isHit("hit");
            } catch (e) {e}

            if (e.ship.hit() === e.ship.shipLength()) {
              removeShip(index);
              try {
                destroyed("destroyed");
              } catch (e) {
                return e;
              }
              return true;
            }
          }
        }
      });
    });
  };

  return {
    ships,
    addShip,
    shipTracker,
    updateShipPos
  };
};

export default ShipManager;
