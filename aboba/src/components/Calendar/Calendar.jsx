import React, { useState, useEffect, useContext } from 'react';
import MonthSlider from '../Sliders/MonthSlider'
import YearSelect from '../Selects/Calendar/YearSelect'
import DaysList from '../Lists/DaysList/DaysList';
import NameDaysBox from '../Box/NameDaysBox/NameDaysBox';
import { Context } from "../../";
import moment from 'moment';

import './CalendarStyle.css'
import ChangeCalendarViewSelect from '../Selects/Calendar/ChangeCalendarViewSelect';
import DaysWeekList from '../Lists/DaysList/DaysWeekList';

const Calendar = () => {
    moment.updateLocale('en', { week: { dow: 1 } })
    const [classSeason, setClassSeason] = useState('header_calendar_c')
    const [classBoxDay, setClassBoxDay] = useState('days_list_dl')
    const [classBoxNameDay, setClassBoxNameDay] = useState('name_day_b')
    const [classHoverDay, setHoverDay] = useState('day_box_db ')
    const [nameDayType, setNameDayType] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
    const [nowType, setNowType] = useState('month')
    const { store } = useContext(Context)

    const [nowMoment, setNowMoment] = useState(moment())
    const startDay = nowMoment.clone().startOf('month').startOf('week')
    console.log(nowMoment.clone().endOf('week'))
    const currentDay = moment()
    // const endDay = moment().endOf('month').endOf('week')
    // const totallDay = 42
    const nowDay = startDay.clone().subtract(1, 'day')

    const daysArray = [...Array(42)].map(() => nowDay.add(1, 'day').clone())
    const lastMonth = () => {
        if ((Number(nowMoment.format('YYYY')) === 2000 && Number(nowMoment.format('MM')) > 1) || Number(nowMoment.format('YYYY')) > 2000)
            setNowMoment(prev => prev.clone().subtract(1, 'month'))
    }
    const nextMont = () => {
        if ((Number(nowMoment.format('YYYY')) < Number(currentDay.format('YYYY')) + 5) || (Number(nowMoment.format('YYYY')) < Number(currentDay.format('YYYY')) + 6 && Number(nowMoment.format('MM')) < 12))
            setNowMoment(prev => prev.clone().add(1, 'month'))
    }

    const selectYear = (year) => {
        setNowMoment(prev => prev.clone().set('year', year))
    }

    // useEffect(() => {
    //     const calIds = 
    //     const aboba = await store.getEvents();
    // }, [store])

    return (
        <div className='calendar_box_c'>
            <div className={classSeason}>
                <MonthSlider setClassSeason={setClassSeason} setClassBoxDay={setClassBoxDay}
                    setClassBoxNameDay={setClassBoxNameDay} month={nowMoment.format("MMMM")}
                    lastMonth={lastMonth} nextMont={nextMont} setHoverDay={setHoverDay} />
                <YearSelect nowYear={nowMoment.format("YYYY")} selectYear={selectYear} />
                <ChangeCalendarViewSelect nowType={nowType} setNowType={setNowType} setNameDayType={setNameDayType} nowMoment={nowMoment} />
            </div>
            <NameDaysBox classBoxNameDay={classBoxNameDay} nameDayType={nameDayType} />
            {nowType === 'month' ?
                <DaysList classBoxDay={classBoxDay} daysArray={daysArray} classHoverDay={classHoverDay} month={nowMoment.format("MM")} />
                : nowType === 'week' ?
                    <DaysWeekList classBoxDay={classBoxDay} daysArray={daysArray} classHoverDay={classHoverDay} month={nowMoment.format("MM")} />
                    :
                    ''}
        </div>

    )
}
export default Calendar