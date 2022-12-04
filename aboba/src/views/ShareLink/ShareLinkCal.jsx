import React, { useEffect, useContext } from 'react';
import { Context } from "../..";
import { useNavigate } from 'react-router-dom';

import NavigationBar from '../../components/Navigation/NavigationBar';

import './ShareLinks.css'
const ShareLinkCal = () => {
    const { store } = useContext(Context)
    let navigate = useNavigate();
    const accept = () => {
        navigate('/home');
    }
    useEffect(() => {
        // const dataAutor = await store.

    }, [])
    return (
        <div className='home_page_hp'>
            <NavigationBar isUserLogged={false} />
            <div className='box_accept'>
                <div className='text_box_accept'>
                    User aboba gave you access to the calendar
                </div>

                <button className='button_accept_box' onClick={accept}>Accept</button>


            </div>

        </div>
    )
}
export default ShareLinkCal