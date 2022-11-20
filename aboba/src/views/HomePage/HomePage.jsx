import React from 'react';
import Calendar from '../../components/Calendar/Calendar';
import CalendarsList from '../../components/Lists/CalendarsList/CalendarsList';
import NavigationBar from '../../components/Navigation/NavigationBar';

import './HomePageStyle.css'

const HomePage = () => {
    return (
        <div className='home_page_hp'>
            <NavigationBar isUserLogged={true} />
            <div className='calendars_box_hp'>
                <CalendarsList />
                <Calendar />
            </div>
        </div>
    )
}
export default HomePage