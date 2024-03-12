import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for react-calendar

const CalendarPage = () => {
  const [date, setDate] = useState(new Date()); // State to track the selected date

  const onChange = (newDate:any) => {
    setDate(newDate); // Update the state when a new date is selected
  };

  return (
    <div>
      <h2>Calendar</h2>
      <Calendar onChange={onChange} value={date} />
      <p>Selected Date: {date.toDateString()}</p> {/* Display the selected date */}
    </div>
  );
};

export default CalendarPage;