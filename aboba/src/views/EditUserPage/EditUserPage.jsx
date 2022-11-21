import React, { useState } from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar';

import '../LoginPage/LoginPageStyle.css'

const EditUserPage = () => {
    const [/*login, */setLogin] = useState([]);
    const [/*email, */setEmail] = useState([]);
    const [error, setError] = useState('');

    const loginFunc = async event => {
        event.preventDefault();
        try {

        }
        catch (e) {
            setError(e.response.data)
        }
    }

    return (
        <div>
            <NavigationBar isUserLogged={true} />
            <form onSubmit={loginFunc} className='auth_page'>
                <span className='auth_pagetitle'>Edit profile</span>

                <div className='auth_login'>
                    <span className='auth_span'>Login</span>
                    <input className='auth_input' required type="text" placeholder='aboba' onChange={e => setLogin(e.target.value)} />
                </div>
                <div className='auth_login'>
                    <span className='auth_span'>email</span>
                    <input className='auth_input' required type="text" placeholder='aboba@gmail.com' onChange={e => setEmail(e.target.value)} />
                </div>

                <div className='auth_error'>{error}</div>

                <div className='aboba'><button className='auth_button'>Confirm changes</button></div>
            </form>
        </div>
    )
}
export default EditUserPage