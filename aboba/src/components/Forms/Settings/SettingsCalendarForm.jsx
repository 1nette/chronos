import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../../../";
import { toJS } from 'mobx';

import calendarImg from "../../..//assets/calendar/calendar_dark.png"
import ArrowDown from "../../Button/Arrows/ArrowDown"
import ArrowLeft from '../../Button/Arrows/ArrowLeft';
import ShareButton from '../../Button/ShareButton/ShareButton';
import PeopleList from '../../Lists/PeopleList/PeopleList';

import './SettingsCalendarFromStyle.css'

const SettingsCalendarForm = () => {

    const [calName, setCalName] = useState('');
    const [newName, setNewName] = useState('');
    const [color, setColor] = useState('#ffffff')
    const [calendarsArray, setCalendarsArray] = useState([]);
    const [idCal, setIdCal] = useState('');
    const [shareLink, setShareLink] = useState('')
    const [isAutor, setIsAutor] = useState('')
    const [error, setError] = useState('')

    const { store } = useContext(Context)

    const [isDropdownShownCals, setisDropdownShownCals] = useState(false);
    const idUs = toJS(store.user.id)

    useEffect(() => {
        async function getCalendars() {
            const aboba = await store.getCalendars();
            setCalendarsArray(aboba)
        }
        getCalendars()
    }, [store])


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
                console.log('sasasa')
                console.log(value._id)
                await store.removeCalendar(value._id);
                setCalendarsArray(await store.getCalendars())
                setNewName('')
                setCalName('')
            }
        }
    }
    const linkShare = async event => {
        event.preventDefault();
        //запрос на генерацию ссылки для  "пожелиться календарем"
        setShareLink('wojowjdwjdo')
    }
    const dellPeople = async event => {
        event.preventDefault();
        //запрос на удаление пользователя с календаря
        console.log('dell cal')
    }
    const updateCal = async event => {
        event.preventDefault();
        if (newName) {
            for (let value of calendarsArray) {
                if (value.title === newName && value._id !== idCal) {
                    setError("This calendar name is already taken")
                    break
                }
            }
            await store.updateCalendar(idCal, newName, color);
            setCalendarsArray(await store.getCalendars())
        } else {
            setError("Enter the name of the calendar")
        }

    }
    useEffect(() => {
        async function getCalendars() {

            setCalendarsArray(await store.getCalendars())
            //тут должна біть проверка  является ли данній пользовтель атором єтого календаря 
        }
        getCalendars()
    }, [store])

    return (
        <div className='row_sc'>
            <div className='back_page'>
                <Link to='/home'><ArrowLeft /></Link>
            </div>
            <form className='form_sc'>
                {calName === '' ?
                    <div className='head_sc'>

                    </div> :
                    idUs.toString() !== isAutor.toString() ?
                        < div className='row_f_sc'>
                            <button className='button_del_sc' onClick={removeCal}>Leave the calendar</button>
                            {console.log(idUs, isAutor)}
                        </div>
                        :
                        <div className='row_f_sc'>
                            <button className='button_del_sc' onClick={removeCal}>Delete</button>
                            <button className='button_up_sc' onClick={updateCal}>Update</button>
                        </div>
                }

                <div className='row_box_sc'>
                    <div>
                        <h2 className='inf_esf'>INFO</h2>
                        <div className='column_box_sc'>
                            <div className="row_box_sc box_cal" >
                                <img src={calendarImg} alt="avatar" className='img_cal_sc' />
                                <label>Calendar:</label>
                                <input type=" text" className='cal_input_sc' disabled required value={calName} placeholder='Select calendar' />
                                <div to='/home' className='box_arrow_sc' onClick={showDropdown3}>
                                    <ArrowDown />
                                </div>
                                <div className={isDropdownShownCals ? 'cal_box_hidden  shown' : 'cal_box_hidden  hidden'}>
                                    {calendarsArray.map((remindItem, idx) =>
                                        <div className='event_form_time' key={idx} onClick={() => {
                                            setCalName(remindItem.title); setNewName(remindItem.title);
                                            setColor(remindItem.color); setIdCal(remindItem._id); setIsAutor(remindItem.owner)
                                        }}><p>{remindItem.title}</p></div>
                                    )}
                                </div>
                            </div>
                            <div className="row_box_sc box_cal" >
                                <img src={calendarImg} alt="avatar" className='img_cal_sc' />
                                <label>Name:</label>
                                <div className='box_input_name_sc'>
                                    <input type=" text" className='cal_input2_sc' placeholder='Name calendar' required value={newName}
                                        onChange={e => setNewName(e.target.value)} maxLength="10" />
                                    <p className='error_message_sc'>{error}</p>
                                </div>
                            </div>
                            <div className="row_box_sc box_cal" >
                                <img src={calendarImg} alt="avatar" className='img_cal_sc' />
                                <label>Color:</label>
                                <input type="color" className='color_sc' value={color} onChange={e => setColor(e.target.value)} />
                            </div>
                        </div>
                        {idUs !== isAutor ?
                            ''
                            :
                            calName === '' ? '' :
                                <div className='button_event_sc'>
                                    <ShareButton title={'Share a calendar'} linkShare={linkShare} />
                                    <div className='link_share_sc'>{shareLink}</div>
                                </div>
                        }


                    </div>
                    <div className='box_peoples_sc'>
                        <h2 className='inf_esf'>People</h2>
                        <PeopleList idUs={idUs} isAutor={isAutor} dellPeople={dellPeople} />
                    </div>
                </div>



            </form >
        </div >
    )
}
export default SettingsCalendarForm