import React from "react";
import { Switch, Route } from "react-router-dom";
import Bookmarks from "../Bookmarks/Bookmarks";
import Containers from "../Containers/Containers";

const LeftAside: React.FC = () => {
  return (
    <div>
      <Switch>
      <Route path="/containers">
        <Containers />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
      </Switch>
      
    </div>
  );
};

export default LeftAside;
