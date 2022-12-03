import React, { useState } from 'react';
import NewEventForm from '../../Forms/Event/NewEventForm'

import remindImage from "../../../assets/calendar/FormEvent/remind_dark.png"

import "./DayBoxStyle.css"

const moment = require("moment");

const DayBox = ({ dayItem, classHoverDay, month }) => {
    const isCarrentDay = (nowDay) => moment().isSame(nowDay, 'day')
    const [showFormEvent, setShowFormEvent] = useState('overlay ')
    const [eventsNumber, setEventsNumber] = useState(0)

    // const thisDaysEvents = ['aboba', 'aboba', 'aboba']

    const newEvent = () => {
        if (showFormEvent !== 'overlay active')
            setShowFormEvent('overlay active')
    }

    return (
        <div >
            <div className={Number(dayItem.format('MM')) === Number(month) ? classHoverDay : classHoverDay + ' dark'} onClick={newEvent} >
                <div className='days_number'>
                    <div className={isCarrentDay(dayItem) ? 'day_db active_day_db ' : 'day_db  '}>
                        {dayItem.format('D')}
                    </div>
                </div>
                {eventsNumber === 0
                    ? ''
                    : <div className='events_number'>
                        <img className='day_db_remind_img' src={remindImage} alt="" />
                        <p className='day_db_p'>{eventsNumber}</p>
                    </div>
                }
                <NewEventForm showFormEvent={showFormEvent} setShowFormEvent={setShowFormEvent} />
            </div>
        </div >
    )
}
export default DayBox