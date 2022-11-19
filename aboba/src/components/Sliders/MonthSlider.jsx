import React, { useState, useEffect } from 'react';
import ArrowLeft from '../Button/Arrows/ArrowLeft';
import ArrowRight from '../Button/Arrows/ArrowRight';
import './MonthSliderStyle.css'

const MonthSlider = ({ setSeason, setClassSeason }) => {
    let date = new Date();
    let result = date.getMonth();
    const [index, setIndex] = useState(result);
    const monthsArray = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    useEffect(() => {
        switch (index) {
            case 0: case 1: case 11:
                setSeason('winter');
                setClassSeason('header_calendar_c winter');
                break;

            case 2: case 3: case 4:
                setSeason('spring');
                setClassSeason('header_calendar_c spring');
                break;

            case 5: case 6: case 7:
                setSeason('summer');
                setClassSeason('header_calendar_c summer');
                break;

            case 8: case 9: case 10:
                setSeason('fall');
                setClassSeason('header_calendar_c fall');
                break;

            default: break;
        }
    }, [setSeason, setClassSeason, index])

    return (
        <div className='slider_month'>
            <ArrowLeft index={index} setIndex={setIndex} />
            <p className='month_name'>{monthsArray[index]}</p>
            <ArrowRight index={index} setIndex={setIndex} />
        </div>
    )
}
export default MonthSlider