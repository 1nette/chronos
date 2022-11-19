import React, { useState } from 'react';
import './CalendarStyle.css'
import MonthSlider from '../Sliders/MonthSlider'
import YearSelect from '../Selects/YearSelect'

const Calendar = () => {
    const [classSeason, setClassSeason] = useState('header_calendar_c')

    return (
        <div className='calendar_box_c'>
            <div className={classSeason}>
                <MonthSlider setClassSeason={setClassSeason} />
                <YearSelect />
            </div>

        </div>

    )
}
export default Calendar