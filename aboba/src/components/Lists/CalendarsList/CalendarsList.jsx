import React, { useState, useEffect, useContext } from 'react';
import ChangeCalendarCircle from '../../Button/CircleButton/ChangeCalendarCircle';
import NewCalendarCircle from '../../Button/CircleButton/NewCalendarCircle';
import NewCalendarForm from '../../Forms/NewCalendarForm/NewCalendarForm';
import { Context } from "../../../";

import './CalendarsListStyle.css'

const CalendarsList = () => {
    const [isNewCalFormShown, setIsNewCalFormShown] = useState(false);
    const [calendarsArray, setCalendarsArray] = useState([]);
    const { store } = useContext(Context)

    useEffect(() => {
        async function getCalendars() {
            const aboba = await store.getCalendars();
            setCalendarsArray(aboba);
        }
        getCalendars()
    }, [store])

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