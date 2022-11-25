import React from 'react';
import NewEventsForm from '../../components/Forms/NewEventsForm/NewEventsForm';
import NavigationBar from '../../components/Navigation/NavigationBar';

import './NewEventPageStyle.css'

const NewEventPage = () => {
    return (
        <div className='home_page_hp'>
            <NavigationBar isUserLogged={true} />
            <NewEventsForm />
        </div>
    )
}
export default NewEventPage