import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router";
import HTTP from "../constants/constants";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

import "./Containers.css";

interface ISearch {
  text: string;
}

const Containers: React.FC<ISearch> = ({ text }) => {
  const [items, seItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  console.log(text);
  useEffect(() => {
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
  }, [text]);

  console.log(items);

  const imageItems = items.map((el: any) => {
    return (      
      <Card className='card'>
        <CardActionArea>
          <CardMedia
            className=''
            style={{height: 140}}
            image={`https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`}
          />
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Bookmarks it!
          </Button>
        </CardActions>
      </Card>
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
      <div className='containers'>
        <Switch>
          <Route path="/containers">{imageItems}</Route>
          <Route path="/bookmarks">TON</Route>
        </Switch>
      </div>
    );
  }
};

export default Containers;
