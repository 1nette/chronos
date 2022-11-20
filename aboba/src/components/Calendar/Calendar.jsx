import React, { useState } from 'react';
import './CalendarStyle.css'
import MonthSlider from '../Sliders/MonthSlider'
import YearSelect from '../Selects/YearSelect'
import DaysList from '../Lists/DaysList/DaysList';

const Calendar = () => {
    const [classSeason, setClassSeason] = useState('header_calendar_c')
    const [classBoxDay, setClassBoxDay] = useState('days_list_dl')

    return (
        <div className='calendar_box_c'>
            <div className={classSeason}>
                <MonthSlider setClassSeason={setClassSeason} setClassBoxDay={setClassBoxDay} />
                <YearSelect />
            </div>

            <DaysList classBoxDay={classBoxDay} />


        </div>

    )
}
export default Calendar