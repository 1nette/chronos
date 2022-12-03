import React, { useState, useEffect } from 'react';
import calendarImage from "../../../assets/calendar/calendar.png"

const ChangeCalendarCircle = ({ info }) => {
    const [isShown, setIsShown] = useState(true);

    const showHide = event => {
        let activeCals = localStorage.getItem('active_cals').split(',');
        let index = activeCals.indexOf(info._id);

        if (isShown) {
            setIsShown(false);
            activeCals.splice(index, 1);
        }
        else {
            setIsShown(true);
            activeCals.push(info._id);
        }

        localStorage.setItem('active_cals', activeCals);
    }
    // const showHide = event => {
    //     let activeCals = localStorage.getItem('active_cals');

    //     if (isShown) {
    //         let activeCals = activeCals.split(',');
    //         let index = activeCals.indexOf(info._id);

    //         setIsShown(false);
    //         activeCals.splice(index, 1);
    //     }
    //     else {
    //         if (activeCals === null)
    //             activeCals = []

    //         setIsShown(true);
    //         activeCals.push(info._id);
    //     }

    //     localStorage.setItem('active_cals', activeCals);
    //     window.location.reload();
    // }

    useEffect(() => {
        let activeCals = localStorage.getItem('active_cals');
        let index = activeCals.indexOf(info._id);
        if(index === -1) {
            setIsShown(false);
        }
    }, [])

    return (
        <div>
            <div onClick={showHide} className={isShown ? 'cal_shown circle circle2' : 'circle circle2'} style={{ backgroundColor: info.color }}>
                <img src={calendarImage} alt="calendarImage" className='calendarImage' />
                <div className='title_name_c'>{info.title}</div>
            </div>
        </div>

    )
}
export default ChangeCalendarCircle