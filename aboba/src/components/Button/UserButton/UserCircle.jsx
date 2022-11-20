import React from 'react';
import avatar from "../../../assets/avatar/yato.png"
import './UserCircleStyle.css'

const UserCircle = () => {
    return (
        <div>
            <div className='circle_user_box'>
                <img src={avatar} alt="avatar" className='avatar' />
            </div>
        </div>
    )
}
export default UserCircle