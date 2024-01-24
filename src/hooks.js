import { useState } from "react";

// business logic for flipping any type of card

function useFlip(currentFlip = true) {
  const [isFlipped, setFlipped] = useState(currentFlip);

  const flip = () => {
    setFlipped((isUp) => !isUp);
  };

  return [isFlipped, flip];
}

export { useFlip };
