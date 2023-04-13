import React from "react";
import BigCalendar from "./BigCalendar"
import SmallCalendar from "./SmallCalendar";
import Calendarlists from "./Calendarlists";
import { Link } from "react-router-dom";

const MainPage = function(){

    return(
        <div>
            <SmallCalendar/>
            <BigCalendar/>
            <Calendarlists/>
            <Link to="/">Entry</Link>
        </div>
    )
}

export default MainPage;