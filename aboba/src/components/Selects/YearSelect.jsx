import React, { useState, useEffect } from 'react';
import './YearSelectStyle.css'
import ArrowDown from '../Button/Arrows/ArrowDown';

const YearSelect = () => {


    return (
        <div className='year_select'>
            <p>year 2222</p>
            <ArrowDown />
            <div className='year_dropdown'>

            </div>
        </div>
    )
}
export default YearSelect