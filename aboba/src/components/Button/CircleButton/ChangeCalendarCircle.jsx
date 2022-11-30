import React, { useState } from 'react';
import calendarImage from "../../../assets/calendar/calendar.png"

const ChangeCalendarCircle = ({ info }) => {
    const [isShown, setIsShown] = useState(true);

    const showHide = event => {
        let activeCals = localStorage.getItem('active_cals').split(',');
        let index = activeCals.indexOf(info._id);

        if (isShown) {
            setIsShown(false);
            activeCals.splice(index, 1);
        }
        else {
            setIsShown(true);
            activeCals.push(info._id);
        }

        localStorage.setItem('active_cals', activeCals);
    }

    return (
        <div>
            <div onClick={showHide} className={isShown ? 'cal_shown circle circle2' : 'circle circle2'} style={{ backgroundColor: info.color }}>
                <img src={calendarImage} alt="calendarImage" className='calendarImage' />
                <div className='title_name_c'>{info.title}</div>
            </div>
        </div>

    )
}
export default ChangeCalendarCircle