import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import LeftAside from "../LeftAside/LeftAside";
import "./Search.css";
import Containers from "../Containers/Containers";

const Search: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handelChange = (e: any) => {
    const a = e.target.value;
    console.log(a);
    setText(a);
  };

  return (
    <div className="search">
      <LeftAside />
      <div className="search__wrapper">
        <form className="" noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="TextSearch"
            variant="outlined"
            onChange={handelChange}
          />
        </form>
        {text ? (
          <Containers text={text} />
        ) : (
          <div>No images here. Would you try to search for anything else?</div>
        )}
      </div>
    </div>
  );
};

export default Search;
