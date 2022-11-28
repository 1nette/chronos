import React, { useState, useEffect } from 'react';


import clockImg from "../../../assets/calendar/FormEvent/clock_dark.png"
import locationImg from "../../../assets/calendar/FormEvent/location_dark.png"
import descriptionImg from "../../../assets/calendar/FormEvent/contract_dark.png"
import remindImg from "../../../assets/calendar/FormEvent/remind_dark.png"
import calendarImg from "../../..//assets/calendar/calendar_dark.png"
import taskImg from "../../../assets/calendar/FormEvent/task.png"
// import arrangementImg from "../../../assets/calendar/FormEvent/arrangement.png"
// import eventImg from "../../../assets/calendar/FormEvent/event.png"
import ArrowDown from "../../Button/Arrows/ArrowDown"

import './SettingsCalendarFormStyle.css'

const SettingsCalendarForm = () => {


    return (
        <div className='aaaa' >
            <form >
                <div className='header_esf'>
                    <button>Delete</button>
                    <button>Save</button>
                 
                </div>
                <h2 className='inf_esf'>INFO</h2>
                <div className='input_row_box_ef'>
                        <div className='column_ef cal_and_type'>
                            <img src={calendarImg} alt="avatar" className='image_esf' />
                            <div className="arrow_esf column_ef" onClick={showCalendarDropdown}>
                                <label className='lable_cal_esf'>Calendar:</label>
                                <input type=" text" className='date_input_evf' disabled /><ArrowDown />
                            </div>
                           

                        </div>
                        <div className='column_ef'>
                            <img src={typeEventImg} alt="avatar" className='image_ef' />
                            <input placeholder='Name of the event' />

                        </div>
                </div>
            </form >
        </div >
    )
}
export default SettingsCalendarForm