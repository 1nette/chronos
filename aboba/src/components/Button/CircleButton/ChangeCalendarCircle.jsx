import React from 'react';
import cal from "../../../assets/calendar/calendar.png"

const ChangeCalendarCircle = ({ info }) => {
    return (
        <div>

            <div className='circle' style={{ backgroundColor: info.color }}>
                <img src={cal} alt="afff;[ef;" className='img' />
            </div>
        </div>

    )
}
export default ChangeCalendarCircle