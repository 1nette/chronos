import React, { useState, useEffect } from 'react';

import avatar from "../../../assets/avatar/yato.png"
import clock from "../../../assets/calendar/FormEvent/clock.png"
import location from "../../../assets/calendar/FormEvent/location.png"
import remind from "../../../assets/calendar/FormEvent/remind.png"
import ArrowDown from '../../Button/Arrows/ArrowDown';

import './NewEventFormStyle.css'

const NewEventForm = ({ showFormEvent, setShowFormEvent }) => {
    const [timesArray, setTimesArray] = useState([]);

    const closeEvent = () => {
        setShowFormEvent('overlay');
    }

    useEffect(() => {
        let array = ['00:00'],
            h = 0,
            mm = '00';

        if (mm === 30) {
            mm = '00';
        }
        else {

        }
    }, [timesArray])

    return (
        <div className={showFormEvent} >
            <form className="popap">
                <div className='column_ef header_ef'>
                    <h2>Create new Event</h2>
                    <span className='close_button_ef' onClick={closeEvent}>&times;</span>
                </div>
                <div className='input_row_box_ef'>
                    <div className='column_ef'>
                        <img src={avatar} alt="avatar" className='image_ef' />
                        <input placeholder='Name of the event' />
                        <input type='checkbox' />
                        <p className='fonts'>All day</p>
                    </div>

                    <div className='column_ef '>
                        <img src={clock} alt="avatar" className='image_ef' />
                        <div className='column_ef time_box_enterval_ef'><input type=" text" className='date_input_ef' /><ArrowDown /></div>
                        <div className='aa_ef'>-</div>
                        <div className='column_ef time_box_enterval_ef'><input type=" text" className='date_input_ef' /><ArrowDown /></div>
                    </div>
                    <div className='column_ef'>
                        <img src={location} alt="avatar" className='image_ef' />
                        <input type="text" placeholder='Place' />
                    </div>
                    <div className='column_ef'>
                        <img src={remind} alt="ima" className='image_ef' />
                        <p className='fonts'>Remind me:</p>
                        <select name="" id=""></select>
                    </div>
                </div>
                <div className='column_ef buttons_ef'>
                    <button>More</button>
                    <button>Save</button>
                </div>

            </form>
        </div>
    )
}
export default NewEventForm