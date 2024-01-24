import { useState } from "react";
import axios from "axios";

// business logic for flipping any type of card

function useFlip(currentFlip = true) {
  const [isFlipped, setFlipped] = useState(currentFlip);

  const flip = () => {
    setFlipped((isUp) => !isUp);
  };
  return [isFlipped, flip];
}

function useAxios(baseUrl) {
  const [responses, setResponses] = useState();

  const addResponseData = async (
    formatter = (data) => data,
    restOfUrl = ""
  ) => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponses((data) => [...data, formatter(response.data)]);
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses([])];
}

export { useFlip, useAxios };
