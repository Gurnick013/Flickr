import React from "react";
import { NavLink } from "react-router-dom";
import BackupIcon from '@material-ui/icons/Backup';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import './LeftAside.css'

const LeftAside: React.FC = () => {
  return (
    <div className='leftAside'>
      <NavLink to="/containers"><BackupIcon/></NavLink>
      <NavLink to="/bookmarks"><MenuBookIcon/></NavLink>
    </div>
  );
};

export default LeftAside;
