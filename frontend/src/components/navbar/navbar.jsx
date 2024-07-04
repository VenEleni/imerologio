import React from 'react';
import classes from './navbar.module.css';
import { IoIosLogOut } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <IoIosLogOut className={classes.logoutIcon} onClick={logout} />
      </div>
    </div>
  );
}
