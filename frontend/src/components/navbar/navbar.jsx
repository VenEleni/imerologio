import React from 'react';
import classes from './navbar.module.css';
import { IoIosLogOut, IoIosLogIn } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineEditLocation } from "react-icons/md";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const login = () => {
    
    navigate('/login');
  };
  const changepass = () => {
    
    navigate('/changepassword');
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <IoIosLogOut className={classes.logoutIcon} onClick={logout} />
        <IoIosLogIn  className={classes.logoutIcon} onClick={login} />
        <MdOutlineEditLocation  className={classes.logoutIcon} onClick={changepass} />
      </div>
    </div>
  );
}
