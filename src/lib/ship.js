const Ship = length => {
    if (length > 4) length = 4;
  
    let hits = 0;
  
    const shipLength = () => length;
  
    const hit = () => (isSunk() ? undefined : (hits += 1));
  
    const isSunk = () => hits >= length;
  
    return {
      shipLength,
      hit,
      isSunk
    };
  };
  
  export default Ship;