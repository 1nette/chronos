import React, { useState, useEffect } from 'react';
import './YearSelectStyle.css'
import ArrowDown from '../Button/Arrows/ArrowDown';
import YearsList from '../Lists/YearsList/YearsList';

const YearSelect = () => {
    const [currentYear, setCurrentYear] = useState();
    const [yearsArray, setYearsArray] = useState([]);
    const [isDropdownShown, setIsDropdownShown] = useState(false);

    useEffect(() => {
        let today = new Date();
        let date = today.getFullYear();
        setCurrentYear(date);

        let array = [2000];
        for (let i = 2001; i < (currentYear + 6); i++) {
            array.push(i);
        }
        setYearsArray(array);
    }, [currentYear])

    const showDropdown = event => {
        if (isDropdownShown)
            setIsDropdownShown(false);
        else
            setIsDropdownShown(true);
    }

    return (
        <div className='year_select' onClick={showDropdown}>
            <p>year {currentYear}</p>
            <ArrowDown />
            <YearsList yearsArray={yearsArray} isDropdownShown={isDropdownShown} />
        </div>
    )
}
export default YearSelect