import { Avatar } from "@material-ui/core";
import React from "react";
import './Header.css'

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__text">IMAGE FINDER</div>
      <Avatar src="/broken-image.jpg" className="header__avatar" />
    </div>
  );
};

export default Header;
