import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router";
import HTTP from "../constants/constants";

interface ISearch {
  text: string;
}

const Containers: React.FC<ISearch> = ({ text }) => {
  const [items, seItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  console.log(text);
  useEffect(() => {
    setTimeout(() => {
      HTTP(text)
        .then((res: any) => res.json())
        .then(
          (result: any) => {
            setIsLoaded(true);
            seItems(result.photos.photo);
          },
          (error: any) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, 1000);
  }, [text]);

  console.log(items);

  const imageItems = items.map((el: any) => {
    return (
      <div>
        <img
          src={`https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`}
          alt=""
        ></img>
        {/* <img src={`https://www.flickr.com/photos/191064590@N02/51365801024`} alt=''></img> */}
        <span>{el.title}</span>
        <Button variant="contained" color="primary">
          Bookmarks it!
        </Button>
      </div>
    );
  });

  if (error) {
    return <div>{error}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <CircularProgress color="secondary" />
      </div>
    );
  } else {
    return (
      <div>
        <Switch>
          <Route path="/containers">{imageItems}</Route>
          <Route path="/bookmarks">TON</Route>
        </Switch>
      </div>
    );
  }
};

export default Containers;
