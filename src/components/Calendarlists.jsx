import React from "react";

import MyCalendar from './Friendsaddsearchopen/MyCalendar';
import FriendsList from './Friendsaddsearchopen/FriendList';
import FriendSearch from './Friendsaddsearchopen/FriendSearch';
import '../styles/CalendarListStyle.css';

const Calendarlists = () => {
      return(
        <div className="Calendarlists">
            <MyCalendar />
            <FriendsList />
            <FriendSearch />
        </div>
      )
  };

  export default Calendarlists;
  