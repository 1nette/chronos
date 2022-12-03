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
import DayList from '../Lists/DaysList/DayList';

const Calendar = () => {
    const { store } = useContext(Context)

    moment.updateLocale('en', { week: { dow: 1 } })
    const [classSeason, setClassSeason] = useState('header_calendar_c')
    const [classBoxDay, setClassBoxDay] = useState('days_list_dl')
    const [classBoxNameDay, setClassBoxNameDay] = useState('name_day_b')
    const [classHoverDay, setHoverDay] = useState('day_box_db ')
    const [nameDayType, setNameDayType] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
    const [nowType, setNowType] = useState('month')



    const [nowMoment, setNowMoment] = useState(moment())
    const startDay = nowMoment.clone().startOf('month').startOf('week')
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

    const lastDay = () => {
        if ((Number(nowMoment.format('YYYY')) === 2000 && Number(nowMoment.format('MM')) > 1) || Number(nowMoment.format('YYYY')) > 2000)
            setNowMoment(prev => prev.clone().subtract(1, 'day'))
    }
    const nextDay = () => {
        if ((Number(nowMoment.format('YYYY')) < Number(currentDay.format('YYYY')) + 5) || (Number(nowMoment.format('YYYY')) < Number(currentDay.format('YYYY')) + 6 && Number(nowMoment.format('MM')) < 12))
            setNowMoment(prev => prev.clone().add(1, 'day'))
    }
    const lastWeek = () => {
        if ((Number(nowMoment.format('YYYY')) === 2000 && Number(nowMoment.format('MM')) > 1) || Number(nowMoment.format('YYYY')) > 2000)
            // var begin = moment(date).startOf('week').isoWeekday(1);
            setNowMoment(prev => prev.clone().startOf('week').subtract(7, 'day'))
    }
    const nextWeek = () => {
        if ((Number(nowMoment.format('YYYY')) < Number(currentDay.format('YYYY')) + 5) || (Number(nowMoment.format('YYYY')) < Number(currentDay.format('YYYY')) + 6 && Number(nowMoment.format('MM')) < 12))
            setNowMoment(prev => prev.clone().startOf('week').add(7, 'day'))
    }

    const selectYear = (year) => {
        setNowMoment(prev => prev.clone().set('year', year))
    }

    useEffect(() => {
        if (nowType === 'month')
            setNameDayType(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
        else if (nowType === 'week') {
            const arrayNameDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            for (let i = 0; i < 7; i++) {
                arrayNameDay[i] = arrayNameDay[i] + nowMoment.clone().startOf('week').add(i, 'day').date()
            }
            setNameDayType(arrayNameDay)
        }

        else {
            switch (nowMoment.day()) {
                case 0: setNameDayType([`Monday ${nowMoment.date()}`])
                    break;
                case 1: setNameDayType([`Tuesday ${nowMoment.date()}`])
                    break;
                case 2: setNameDayType([`Wednesday ${nowMoment.date()}`])
                    break;
                case 3: setNameDayType([`Thursday ${nowMoment.date()}`])
                    break;
                case 4: setNameDayType([`Friday ${nowMoment.date()}`])
                    break;
                case 5: setNameDayType([`Saturday ${nowMoment.date()}`])
                    break;
                case 6: setNameDayType([`Sunday ${nowMoment.date()}`])
                    break;
                case 7: setNameDayType([`Monday ${nowMoment.date()}`])
                    break;
                default: break;
            }
        }
    }, [nowType, nowMoment])

    return (
        <div className='calendar_box_c'>
            <div className={classSeason}>
                <MonthSlider setClassSeason={setClassSeason} setClassBoxDay={setClassBoxDay}
                    setClassBoxNameDay={setClassBoxNameDay} month={nowMoment.format("MMMM")}
                    lastMonth={lastMonth} nextMont={nextMont} setHoverDay={setHoverDay} />
                <YearSelect nowYear={nowMoment.format("YYYY")} selectYear={selectYear} />
                <ChangeCalendarViewSelect nowType={nowType} setNowType={setNowType} />
            </div>
            <NameDaysBox classBoxNameDay={classBoxNameDay} nextDay={nextDay} lastDay={lastDay}
                nameDayType={nameDayType} nowType={nowType} lastWeek={lastWeek} nextWeek={nextWeek} />
            {nowType === 'month' ?
                <DaysList classBoxDay={classBoxDay} daysArray={daysArray} classHoverDay={classHoverDay} month={nowMoment.format("MM")} />
                : nowType === 'week' ?
                    <DaysWeekList classBoxDay={classBoxDay} daysArray={daysArray} classHoverDay={classHoverDay} month={nowMoment.format("MM")} />
                    :
                    <DayList classBoxDay={classBoxDay} daysArray={daysArray} classHoverDay={classHoverDay} month={nowMoment.format("MM")} />
            }
        </div>

    )
}
export default Calendar