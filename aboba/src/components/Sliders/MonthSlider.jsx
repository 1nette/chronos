import React, { useState, useEffect } from 'react';
import ArrowLeft from '../Button/Arrows/ArrowLeft';
import ArrowRight from '../Button/Arrows/ArrowRight';
import './MonthSliderStyle.css'

const MonthSlider = ({ setClassSeason, setClassBoxDay }) => {
    let date = new Date();
    let result = date.getMonth();
    const [index, setIndex] = useState(result);
    const monthsArray = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    useEffect(() => {
        switch (index) {
            case 0: case 1: case 11:
                setClassSeason('header_calendar_c winter');
                setClassBoxDay('days_list_dl blue_dl')
                break;

            case 2: case 3: case 4:
                setClassSeason('header_calendar_c spring');
                setClassBoxDay('days_list_dl pink_dl')
                break;

            case 5: case 6: case 7:
                setClassSeason('header_calendar_c summer');
                setClassBoxDay('days_list_dl green_dl')
                break;

            case 8: case 9: case 10:
                setClassSeason('header_calendar_c fall');
                setClassBoxDay('days_list_dl orange_dl')
                break;

            default: break;
        }
    }, [setClassSeason, setClassBoxDay, index])

    return (
        <div className='slider_month'>
            <ArrowLeft index={index} setIndex={setIndex} />
            <p className='month_name'>{monthsArray[index]}</p>
            <ArrowRight index={index} setIndex={setIndex} />
        </div>
    )
}
export default MonthSlider