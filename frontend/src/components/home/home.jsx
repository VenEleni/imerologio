import React from "react";
import classes from "./home.module.css";
import logo from "../../assets/imerologio-logo.png"
import photo1 from "../../assets/photo1.jpg"
import {Link} from "react-router-dom"


export default function home() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img src={logo} alt="Imerologio" className={classes.logo} />
      </header>
      <div className={classes.bodyWrapper}>
        <div className={classes.topRow}>
          <div className={classes.right}>
            <img src={photo1} alt="" className={classes.photo}/>
          </div>
          <div className={classes.left}>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className={classes.bottomRow}>
          <div className={classes.loginWrapper}>
          <Link to="/login"><button href="/login" className={classes.btn}>Login</button></Link>
          <h2>or</h2>
          <Link to="/register"><button className={classes.btn}>Register</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
