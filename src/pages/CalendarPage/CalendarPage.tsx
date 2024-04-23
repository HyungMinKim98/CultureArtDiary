//src>pages>CalendarPage>CalendarPage.tsx

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for react-calendar

interface Event {
  date: string;
  title: string;
}

interface CalendarTileProperties {
  date: Date;
  view: string;  // Assuming 'view' is a string, adjust as necessary.
}

const CalendarPage = () => {
  const [date, setDate] = useState<Date | Date[]>(new Date());
  const [events, setEvents] = useState<Event[]>([
    { date: new Date().toISOString(), title: "My Event" }
  ]);

  const onChange = (value: Date | Date[], event: React.SyntheticEvent<any, Event>) => {
    setDate(Array.isArray(value) ? value[0] : value);
  };


    // Function to render events on the calendar
    const tileContent = ({ date, view }: CalendarTileProperties) => {
      const dayEvents = events.filter(e => new Date(e.date).toDateString() === date.toDateString());
      return (
        <div>
          {dayEvents.map((event, index) => <p key={index}>{event.title}</p>)}
        </div>
      );
    };
  
    return (
      <div>
        <h2>Calendar</h2>
        <Calendar
          onChange={onChange}
          value={date}
          tileContent={tileContent}
        />
        <p>Selected Date: {Array.isArray(date) ? date[0].toDateString() : date.toDateString()}</p>
      </div>
    );
  };
  
  
  export default CalendarPage;