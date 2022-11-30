import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../../../";

import calendarImg from "../../..//assets/calendar/calendar_dark.png"
import ArrowDown from "../../Button/Arrows/ArrowDown"
import ArrowLeft from '../../Button/Arrows/ArrowLeft';

import './SettingsCalendarFromStyle.css'

const SettingsCalendarForm = () => {

    const [calName, setCalName] = useState('');
    const [newName, setNewName] = useState('');
    const [calendarsArray, setCalendarsArray] = useState([]);
    const { store } = useContext(Context)

    useEffect(() => {
        async function getCalendars() {
            const aboba = await store.getCalendars();
            setCalendarsArray(aboba)
        }
        getCalendars()
    }, [store])

    const [isDropdownShownCals, setisDropdownShownCals] = useState(false);

    const showDropdown3 = event => {
        if (isDropdownShownCals)
            setisDropdownShownCals(false);
        else {
            setisDropdownShownCals(true);
        }
    }
    const removeCal = async event => {
        event.preventDefault();
        for (let value of calendarsArray) {
            if (value.title === newName) {
                console.log("aboba")
                await store.removeCalendar(value._id);
            }
            console.log(value)
        }
        console.log(calendarsArray)
    }

    return (
        <div className='row_sc'>
            <div className='back_page'>
                <Link to='/home'><ArrowLeft /></Link>
            </div>
            <form className='form_sc'>
                <div className='row_f_sc'>
                    <button className='button_del_sc' onClick={removeCal}>Delete</button>
                    <button className='button_up_sc'>Update</button>

                </div>
                <h2 className='inf_esf'>INFO</h2>
                <div className='column_box_sc'>
                    <div className="row_box_sc box_cal" >
                        <img src={calendarImg} alt="avatar" className='img_cal_sc' />
                        <label>Calendar:</label>
                        <input type=" text" className='cal_input_sc' disabled required value={calName} placeholder='avvodovkdvk' />
                        <div to='/home' className='box_arrow_sc' onClick={showDropdown3}>
                            <ArrowDown />
                        </div>
                        <div className={isDropdownShownCals ? 'cal_box_hidden  shown' : 'cal_box_hidden  hidden'}>
                            {calendarsArray.map((remindItem, idx) =>
                                <div className='event_form_time' key={idx} onClick={() => { setCalName(remindItem.title); setNewName(remindItem.title) }}><p>{remindItem.title}</p></div>
                            )}
                        </div>
                    </div>
                    <div className="row_box_sc box_cal" >
                        <img src={calendarImg} alt="avatar" className='img_cal_sc' />
                        <label>Name:</label>
                        <input type=" text" className='cal_input_sc' placeholder='Select calendar' required value={newName} onChange={e => setNewName(e.target.value)} />
                    </div>
                    <div className="row_box_sc box_cal" >
                        <img src={calendarImg} alt="avatar" className='img_cal_sc' />
                        <label>Color:</label>
                        <input type="color" className='color_sc' />
                    </div>


                </div>
            </form >
        </div >
    )
}
export default SettingsCalendarForm