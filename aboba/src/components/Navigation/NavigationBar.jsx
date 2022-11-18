import React from 'react';
import './NavigationBarStyle.css'
import caler from "../../assets/calendar/calendar.png"
import Burger from '../Button/Burger/Burger';
import UserCircle from '../Button/UserButton/UserCircle';

const NavigationBar = () => {
    return (
        <div className='nav_bar_box'>
            <div className='logo'>
                <img src={caler} alt="afff;[ef;" className='img' />
                <p>CHRONOS</p>
            </div>
            <div className='user_box_nav'>
                <UserCircle />
                <p className='user_name'>Ffeffeffo</p>
                <Burger />
            </div>

        </div>
    )
}
export default NavigationBar