import React from "react";
import classes from "./footer.module.css";

export default function footer() {
  return (
    <div className={classes.wrapper}>
      <p className={classes.items}>©2024 IMEROLOGIO. All rights reserved</p>
      <div className={classes.items}>
        <div className={classes.row}>
        <p>Privacy & Policy</p>
        <p>Terms & Condition</p>
        </div>
      </div>
    </div>
  );
}
