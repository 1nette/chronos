import React, { useState, useEffect, useRef } from 'react';
import ArrowDown from '../Button/Arrows/ArrowDown';
import './YearSelectStyle.css'

const YearSelect = ({ nowYear, selectYear }) => {
    const [currentYear, setCurrentYear] = useState();
    const [yearsArray, setYearsArray] = useState([]);
    const [isDropdownShown, setIsDropdownShown] = useState(false);
    const myRef = useRef(null);

    useEffect(() => {
        let today = new Date();
        let date = today.getFullYear();
        setCurrentYear(date);

        let array = [2000];
        for (let i = 2001; i < (currentYear + 6); i++) {
            array.push(i);
        }
        setYearsArray(array);
    }, [currentYear, nowYear])

    const showDropdown = event => {
        if (isDropdownShown)
            setIsDropdownShown(false);
        else {
            setIsDropdownShown(true);
            myRef.current.scrollIntoView();
        }
    }

    return (
        <div className='year_select' onClick={showDropdown}>
            <p>year {nowYear}  </p>
            <ArrowDown />
            <div className={isDropdownShown ? 'year_dropdown shown' : 'year_dropdown hidden'}>
                {yearsArray.map(year =>
                    <div className={Number(nowYear) === year ? 'year current' : 'year'} ref={Number(nowYear) === year ? myRef : null}
                        key={year} onClick={() => selectYear(year)}>{year}</div>
                )}
            </div>
        </div>
    )
}
export default YearSelect