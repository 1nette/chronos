import React, { useState } from 'react';
import calendarImage from "../../../assets/calendar/calendar.png"

const ChangeCalendarCircle = ({info}) => {
    const [isShown, setIsShown] = useState(true);

    const showHide = event => {
        if (isShown)
            setIsShown(false);
        else
            setIsShown(true);
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