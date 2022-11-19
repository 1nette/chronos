import React, { useState } from 'react';
import './CalendarStyle.css'
import MonthSlider from '../Sliders/MonthSlider'
import YearSelect from '../Selects/YearSelect'

const Calendar = () => {
    const [season, setSeason] = useState()
    const [classSeason, setClassSeason] = useState('header_calendar_c')
    console.log(season)

    return (
        <div className='calendar_box_c'>
            <div className={classSeason}>
                <MonthSlider setSeason={setSeason} setClassSeason={setClassSeason} />
                <YearSelect />
            </div>

        </div>

    )
}
export default Calendar