import React from 'react';
import EventButton from '../../components/Button/EventButton/EventButton';
import Calendar from '../../components/Calendar/Calendar';
import CalendarsList from '../../components/Lists/CalendarsList/CalendarsList';
import NavigationBar from '../../components/Navigation/NavigationBar';
import SettingsButton from '../../components/Button/SettingsButton/SettingsButton'
import './HomePageStyle.css'

const HomePage = () => {
    return (
        <div className='home_page_hp'>
            <NavigationBar isUserLogged={true} />
            <div className='calendars_box_hp'>
                <CalendarsList />
                <Calendar />
            </div>
            <SettingsButton />
            <EventButton />
        </div>
    )
}
export default HomePage