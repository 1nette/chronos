import React, { useState } from 'react';
import './CalendarsListStyle.css'
import ChangeCalendarCircle from '../../Button/CircleButton/ChangeCalendarCircle';
import NewCalendarCircle from '../../Button/CircleButton/NewCalendarCircle';
import NewCalendarForm from '../../Forms/NewCalendarForm/NewCalendarForm';

const CalendarsList = () => {
    const [isNewCalFormShown, setIsNewCalFormShown] = useState(false);

    let calendarsArray = [
        { name: 'aboba1', color: '#F4C5B5' },
        { name: 'aboba2', color: '#443973' },
        { name: 'aboba3', color: '#B99CBF' },
        { name: 'aboba4', color: '#F2E7BA' }
    ]

    return (
        <div className='calendars_box'>
            <NewCalendarCircle isNewCalFormShown={isNewCalFormShown} setIsNewCalFormShown={setIsNewCalFormShown} />
            <div className='calendars_list_box' >
                {calendarsArray.map((calendar, index) =>
                    <ChangeCalendarCircle info={calendar} key={index} />
                )}
            </div>
            <NewCalendarForm isNewCalFormShown={isNewCalFormShown} />
        </div>
    )
}
export default CalendarsList