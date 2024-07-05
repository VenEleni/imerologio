import React, { useState, useEffect, useRef } from "react";
import classes from "./NewJounal.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/imerologio-logo.png";

import DatePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

export default function NewJournal() {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);
  const [date, setDate] = useState(new Date());

  const handleChange = (date) => {
    setDate(date);
    // Do something with the selected date
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  const countWords = () => {
    const words = text.trim().split(/\s+/).length;
    return words;
  };

  const countCharacters = () => {
    const characters = text.replace(/\s/g, "").length;
    return characters;
  };

  return (
    <div className={classes.journalContainer}>
      <header className={classes.header}>
        <Link>
          <FaArrowLeft className={classes.backIcon} />
        </Link>
        <img src={logo} alt="" className={classes.logo} />
        <Link>
          <FaSignOutAlt className={classes.logout} />
        </Link>
      </header>
      <div className={classes.row1}>
        <DatePicker

          className={classes.datePicker}
          format="y-MM-dd h:mm a"
          onChange={handleChange}
          value={date}
          locale="ge-GE"
        />
        <Link className={classes.saveLabel}>
          Save! <FiSave className={classes.saveIcon} />
        </Link>
      </div>

      <div className={classes.noteContainer}>
        <div className={classes.noteWrapper}>
          <textarea
            ref={textAreaRef}
            placeholder="Write Something ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="note"
            id="note"
          />
        </div>
      </div>

      <footer className={classes.journalFooter}>
        {countWords()} Words, {countCharacters()} Characters
      </footer>
    </div>
  );
}
