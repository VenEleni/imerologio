import React, { useState, useEffect, useRef } from "react";
import classes from "./NewJounal.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/imerologio-logo.png";
import Multiselect from "multiselect-react-dropdown";

import DatePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import Navbar from "../navbar/navbar";

export default function NewJournal() {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);
  const [date, setDate] = useState(new Date());

  const [options, setOptions] = useState([
    { name: 'Option 1️⃣', id: 1 },
    { name: 'Option 2️⃣', id: 2 }
  ]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [showTagsPopup, setShowTagsPopup] = useState(true);



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



  function onSelect(selectedList, selectedItem) {
    setSelectedValue(selectedList);
}

function onRemove(selectedList, removedItem) {
  setSelectedValue(selectedList);
}

const toggleTagsPopup = () => {
  setShowTagsPopup(!showTagsPopup);
};

  return (
    <div className={classes.journalContainer}>
      <Navbar isEditor={true} />

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
        <div>
          {countWords()} Words, {countCharacters()} Characters
        </div>
        <button className={classes.tagsBtn} onClick={() => toggleTagsPopup}>Tags</button>
        
      </footer>


      {showTagsPopup && (
        <div className={classes.tagsPopupContainer}>
          <div className={classes.tagsPopupWrapper}>
          <IoMdClose className={classes.tagsCloseBtn} onClick={()=> showTagsPopup(false)} />
          <Multiselect
          className={classes.tagsSelection}
            options={options} // Options to display in the dropdown
            selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
          </div>
        </div>
      )}

    



    </div>
  );
}


