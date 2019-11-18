// ship array , each ship has an index

// index 0
//  a b c d
//  S
//  S
//  X
// eslint-disable-next-line no-unused-vars
const ShipManager = () =>{
    let shipArray = [];
    const ships = () => shipArray;

    const addShip = (ship, shipPos) =>{
        shipArray.push({ship, shipPos})
    };

    const removeShip = (index) =>{
        shipArray.splice(index,1);
        return true
    };

    const shipTracker = (reciveAttack ) => {
        ships.forEach((e, index) =>{
            //get access to ship positions
            e.shipPos.forEach(sp =>{
                if(reciveAttack.msg === 'ship'){
                    if(sp === reciveAttack.result){
                        if(e.ship.hit() === undefined ){
                            removeShip(index)
                        }
                    }
                }
            })
        })

    };

    return{
        ships,
        addShip,
        shipTracker

    }

};

export default ShipManager
// loop through ships an match object and update ship length
// eslint-disable-next-line no-unused-vars
