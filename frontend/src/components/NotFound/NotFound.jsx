import React from "react";
import classes from "./NotFound.module.css";


export default function NotFound() {
 
  return (
    <div className={classes.journalContainer}>
        <h1>Error 404</h1>
        <h3>Page does not Exist</h3>
    </div>
  );
}
