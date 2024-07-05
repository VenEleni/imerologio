import React, { useState , useRef } from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import "./calendar.css"

// const OurCalendar = () => {
//   const [date, setDate] = useState(new Date());

//   const onChange = (newDate) => {
//     setDate(newDate);
//   };

//   return (
//     <div className="react-calendar">
//       <div className="react-calendar__navigation__label">
//         <span className="react-calendar__navigation__label__labelText">
//           {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
//         </span>
//       </div>
//       <Calendar
//         onChange={onChange}
//         value={date}
//       />
//     </div>
//   );
// };

const OurCalendar = () => {
  const [date, setDate] = useState(new Date()); //current date
  const calendarRef = useRef(null);
  const scrollThreshold = 100; 


const handleScroll = (event) => {
  const calendarContainer = calendarRef.current;
  if (calendarContainer) {
    if (event.deltaY < 0) { // if we scroll up
      const monthsToSubtract = Math.abs(event.deltaY) / scrollThreshold;
      const newDate = new Date(
        date.getFullYear(),
        date.getMonth() - monthsToSubtract,
        1
      );
      setDate(newDate);
    } else {
      // if we Scroll down. we could also write it like this - if (event.deltaY >= 0)
      const monthsToAdd = Math.ceil(Math.abs(event.deltaY) / scrollThreshold);
      const newDate = new Date(  
        date.getFullYear(),
        date.getMonth() + monthsToAdd,
        1
      );
      setDate(newDate); //we update the value of the date state
    }
  }
};

const tileContent = ({ date, view }) => {
  const currentDate = new Date()
  if (view === 'month' && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear() && date.getDate() === new Date().getDate()) {
    return <div className="current-day-marker"></div>;
  }
};


return (
  <div className="react-calendar" ref={calendarRef} onWheel={handleScroll}>
    <div className="react-calendar__navigation__label">
      <span className="react-calendar__navigation__label__labelText">
        {date.toLocaleString("default", { month: "long" })}{" "}
        {date.getFullYear()}
      </span>
    </div>
    <Calendar
      onChange={setDate}
      value={date}
      tileContent={tileContent}
    />
  </div>
);
};

export default OurCalendar;
