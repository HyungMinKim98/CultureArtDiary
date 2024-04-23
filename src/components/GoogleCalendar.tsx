// src>components>GoogleCalendar.tsx

import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
declare global {
  interface Window { gapi: any; }
}
const GoogleCalendar = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      document.body.appendChild(script);
      script.onload = () => {
          gapi.load('client:auth2', () => {
              gapi.client.init({
                  apiKey: 'AIzaSyDX5elsFATlDT14NVeY_hTPl-U3XZ1dKvM',
                  clientId: 'id-787@cultureartdiary-421212.iam.gserviceaccount.com',
                  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
                  scope: "https://www.googleapis.com/auth/calendar.events"
              }).then(() => {
                  gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                  updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
              });
          });
      };
      return () => {
          document.body.removeChild(script);
      };
  }, []);

      const handleAuthClick = () => window.gapi.auth2.getAuthInstance().signIn();
      const handleSignoutClick = () => window.gapi.auth2.getAuthInstance().signOut();
    
      const updateSigninStatus = (isSignedIn: boolean) => {
        if (isSignedIn) {
          listUpcomingEvents();
        }
      };


      const listUpcomingEvents = () => {
        window.gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then((response: any) => {
          const events = response.result.items;
          console.log('Upcoming events:', events);
        });
      };

      
    return (
        <div>
            <h1>Google Calendar Events</h1>
            <button onClick={handleAuthClick}>Sign In</button>
            <button onClick={handleSignoutClick}>Sign Out</button>
        </div>
    );
};

export default GoogleCalendar;
