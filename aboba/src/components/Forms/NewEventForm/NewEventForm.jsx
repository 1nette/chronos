import React, { useState } from 'react';

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

    return (
        <div className={showFormEvent} >
            <form className="popap">
                <div className='column_ef header_ef'>
                    <h2>Create new Event</h2>
                    <span className='close_button_ef' onClick={closeEvent}>&times;</span>
                </div>

                <div className='column_ef'>
                    <img src={avatar} alt="avatar" className='image_ef' />
                    <input placeholder='Name of the event' />
                    <input type='checkbox' /> All day
                </div>

                <div className='column_ef'>
                    <img src={clock} alt="avatar" className='image_ef' />
                    <div className='column_ef'><input type=" text" /><ArrowDown /></div>-
                    <div className='column_ef'><input type=" text" /><ArrowDown /></div>
                </div>
                <div className='column_ef'>
                    <img src={location} alt="avatar" className='image_ef' />
                    <input type="text" placeholder='Place' />
                </div>
                <div className='column_ef'>
                    <img src={remind} alt="ima" className='image_ef' />
                    Remind me:
                    <select name="" id=""></select>
                </div>
                <div className='column_ef'>
                    <button>More</button>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}
export default NewEventForm