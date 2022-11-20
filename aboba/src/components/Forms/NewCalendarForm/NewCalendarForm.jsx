import React, { useState } from 'react';

import './NewCalendarFormStyle.css'

const NewCalendarForm = ({ isNewCalFormShown }) => {
    const [/*name, */setName] = useState([]);
    const [error, setError] = useState('');

    const signupFunc = async event => {
        event.preventDefault();
        try {

        }
        catch (e) {
            setError(e.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={signupFunc} className={isNewCalFormShown ? 'shown_form newcal_page' : 'hidden_form newcal_page'}>
                <span className='newcal_pagetitle'>New calendar</span>

                <div className='newcal_login'>
                    <span className='newcal_span'>Name</span>
                    <input className='newcal_input' required type="text" placeholder='enter name...' onChange={e => setName(e.target.value)} />
                </div>

                <div className='newcal_error'>{error}</div>

                <div className='aboba'><button className='newcal_button'>Create</button></div>
            </form>
        </div>
    )
}
export default NewCalendarForm