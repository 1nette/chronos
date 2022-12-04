import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../../";
import EventButton from '../../components/Button/EventButton/EventButton';
import Calendar from '../../components/Calendar/Calendar';
import CalendarsList from '../../components/Lists/CalendarsList/CalendarsList';
import NavigationBar from '../../components/Navigation/NavigationBar';
import SettingsButton from '../../components/Button/SettingsButton/SettingsButton'
import './HomePageStyle.css'

const HomePage = () => {
    const [checkEvents, setCheckEvents] = useState('')
    const { store } = useContext(Context)
    let navigate = useNavigate();
    useEffect(() => {
        if (store.isAuth === false)
            navigate('/');

    }, [store])
    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //       store.checkAuth()
    //     }
    //   }, [store])
    return (
        <div className='home_page_hp'>
            <NavigationBar isUserLogged={true} />
            <div className='calendars_box_hp'>
                <CalendarsList setCheckEvents={setCheckEvents} />
                <Calendar checkEvents={checkEvents} />
            </div>
            <SettingsButton />
            <EventButton />
        </div>
    )
}
export default HomePage