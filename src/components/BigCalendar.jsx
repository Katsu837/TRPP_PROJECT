import React, {useState} from "react";
import DaysOfTheWeek from "./BigCalendarComponents/DaysOfTheWeek";
import GridOfMonth from "./BigCalendarComponents/GridOfMonth";
import '../styles/BigCalendar.css'
import iconLeft from "./image/icons8l.png"
import iconRight from "./image/icons8r.png"

const BigCalendar = function ()
{
    let todayMonth = new Date().getMonth();
    let todayYear = new Date().getFullYear();
    const [month, setMonth] = useState(todayMonth);
    const [year, setYear] = useState(todayYear)

    console.log(month)

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let nameMonth = months[month % 12]
    function nextMonth()
    {
        if(month == 11)
        {
            setYear(year + 1)
            setMonth(month - 11)
        }
        else setMonth(month + 1)
    }
    function previousMonth()
    {
        if(month == 0)
        {
            setYear(year - 1)
            setMonth(month + 11)
        }
        else setMonth(month - 1)
    }

    return(
        <div className="bigCalendar">
            <div className="firstLineContainer">
                <select className="selectFormat">
			        <option value="monthOption">Month</option>
                    <option value="weekOption">Week</option>
                    <option value="dayOption">Day</option>
			    </select>
                <button className="previous" onClick={previousMonth}><img src={iconLeft} alt="previous" width="40px" height="40px" /></button>
                <a className="monthYear">{nameMonth}, {year}</a>
                <button className="next" onClick={nextMonth}><img src={iconRight} alt="previous" width="40px" height="40px" /></button>
            </div>
            <DaysOfTheWeek/>
            <GridOfMonth month={month % 12} year={year} />
        </div>
    )
}

export default BigCalendar;
