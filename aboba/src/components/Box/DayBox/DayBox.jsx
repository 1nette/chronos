import React, { useState } from 'react';
import "./DayBoxStyle.css"
import NewEventForm from '../../Forms/Event/NewEventForm'
const moment = require("moment")


const DayBox = ({ dayItem, classHoverDay, month }) => {
    const isCarrentDay = (nowDay) => moment().isSame(nowDay, 'day')
    const [showFormEvent, setShowFormEvent] = useState('overlay ')
    const newEvent = () => {
        if (showFormEvent !== 'overlay active')
            setShowFormEvent('overlay active')
    }

    return (
        <div className={Number(dayItem.format('MM')) === Number(month) ? classHoverDay : classHoverDay + ' dark'} onClick={newEvent} >
            <div className={isCarrentDay(dayItem) ? 'day_db active_day_db ' : 'day_db  '}>{dayItem.format('D')}</div>
            <NewEventForm showFormEvent={showFormEvent} setShowFormEvent={setShowFormEvent} />
        </div >


    )
}
export default DayBox