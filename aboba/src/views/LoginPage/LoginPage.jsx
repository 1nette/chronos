import React, { useState } from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import './LoginPageStyle.css'

const LoginPage = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [error, setError] = useState('');

    let navigate = useNavigate();

    const loginFunc = async event => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:8000/api/login`, JSON.stringify({ "email": email, "password": password }), { "headers": { "content-type": "application/json", }, });

            navigate('/home');
        }
        catch (e) {
            setError(e.response.data)
        }
    }

    return (
        <div>
            <NavigationBar isUserLogged={false} />
            <form onSubmit={loginFunc} className='auth_page'>
                <span className='auth_pagetitle'>Log In</span>

                <div className='auth_login'>
                    <span className='auth_span'>Email</span>
                    <input className='auth_input' required type="text" placeholder='enter email...' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='auth_pass'>
                    <span className='auth_span'>Password</span>
                    <input className='auth_input' required type="text" placeholder='enter password...' onChange={e => setPassword(e.target.value)} />
                </div>

                <div className='auth_error'>{error}</div>

                <div className='auth_link'><a href="/reset_password">Forget your password?</a></div>

                <div className='aboba'><button className='auth_button'>Log In</button></div>
            </form>
        </div>
    )
}
export default LoginPage