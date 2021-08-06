import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { HTTP } from "../constants/constants";

const Containers: React.FC = () => {
  const [items, seItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(HTTP)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            seItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, 1000);
  }, []);

  console.log(items)

  if (error) {
    return <div>{error}</div>;
  } else if (!isLoaded) {
    return <div>...Loading</div>;
  } else {
    return <div>HI</div>;
  }
};

export default Containers;
