import React, { useState/*, useEffect*/ } from 'react';
// import axios from 'axios'
import ChangeCalendarCircle from '../../Button/CircleButton/ChangeCalendarCircle';
import NewCalendarCircle from '../../Button/CircleButton/NewCalendarCircle';
import NewCalendarForm from '../../Forms/NewCalendarForm/NewCalendarForm';

import './CalendarsListStyle.css'

const CalendarsList = () => {
    const [isNewCalFormShown, setIsNewCalFormShown] = useState(false);
    const [calendarsArray/*, setCalendarsArray*/] = useState([]);

    // useEffect(() => {
    //     async function getCalendars() {
    //         const response = await axios.get(`http://localhost:8000/api/getCalendar`);
    //         setCalendarsArray(response.data);
    //         console.log(response.data);
    //         console.log(response);
    //     }
    //     getCalendars()
    // }, [])

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