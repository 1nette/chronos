import React from 'react';
import "./DayBoxStyle.css"
import NewEventForm from '../../Forms/NewEventForm/NewEventForm'
const moment = require("moment")


const DayBox = ({ dayItem, classHoverDay, month }) => {
    const isCarrentDay = (nowDay) => moment().isSame(nowDay, 'day')


    return (
        <div className={Number(dayItem.format('MM')) === Number(month) ? classHoverDay : classHoverDay + ' dark'} >
            <div className={isCarrentDay(dayItem) ? 'day_db active_day_db ' : 'day_db  '}>{dayItem.format('D')}</div>
            <NewEventForm />
        </div >


    )
}
export default DayBox