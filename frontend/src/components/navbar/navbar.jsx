import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { IoIosLogOut, IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imerologio-logo.png";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { withRouter } from "react-router-dom";

export default function Navbar({ isEditor }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return token !== null;
  };

  const getUserIDfromtoken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        // console.log(decodedToken.user.userId);
        return decodedToken.user.userId;
      } catch (err) {
        console.error("Invaled Token", err);
        return null;
      }
    }
    return null;
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/user/allusers");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userId = getUserIDfromtoken();
      if (userId) {
        const allUsers = await getUsers();
        console.log("allUsers")
        const currentUser = allUsers.find((v) => v._id === userId);
        setUser(currentUser);
      }
    };

    fetchUser();
  }, []);

  const goBack = () => {
    this.props.history.goBack();
  };

  const login = () => {
    navigate('/login');
  };
  const changepass = () => {
    navigate('/changepassword');
  };

  return (
    <div className={classes.container}>

      {/* Navbar component for Normal view */}
      <div className={isEditor ? classes.Hiddenwrapper : classes.wrapper}>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
        <nav className={isLoggedIn() ? classes.navbar : classes.Hiddennavbar}>
          <ul>
            <li>
              <Link to="/journals">Journals</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <span>{user ? "Hello " + user.name + "! " : ""}</span>
              <IoIosLogOut className={classes.logoutIcon} onClick={logout} />
            </li>
          </ul>
        </nav>
      </div>
      {/* Navbar component for Editor */}
      <div className={isEditor ? classes.EditorWrapper : classes.Hiddenwrapper}>
        <div>
          <IoIosArrowBack className={classes.logoutIcon} onClick={goBack} />
        </div>
        <Link to="/login">
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
        <div>
          <span>{user ? "Hello " + user.name + "! " : ""}</span>
          <IoIosLogOut className={classes.logoutIcon} onClick={logout} />
        </div>

      </div>
    </div>
  );
}
