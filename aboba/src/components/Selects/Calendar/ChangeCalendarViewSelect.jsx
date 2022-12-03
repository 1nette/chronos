import React, { useState } from 'react';
import ArrowDown from '../../Button/Arrows/ArrowDown';
import './SelectCalStyle.css'

const ChangeCalendarViewSelect = ({ nowType, setNowType, setNameDayType, nowMoment }) => {
    const typeArray = ['day', 'week', 'month'];
    const [isDropdownShown, setIsDropdownShown] = useState(false);



    const showDropdown = event => {
        if (isDropdownShown)
            setIsDropdownShown(false);
        else {
            setIsDropdownShown(true);
        }
    }
    const checkTypeNameDay = event => {
        if (event === 'week' || event === 'month')
            setNameDayType(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
        else {
            switch (nowMoment.day()) {
                case 0: setNameDayType([`Monday ${nowMoment.date()}`])
                    break;
                case 1: setNameDayType([`Tuesday ${nowMoment.date()}`])
                    break;
                case 2: setNameDayType([`Wednesday ${nowMoment.date()}`])
                    break;
                case 3: setNameDayType([`Thursday ${nowMoment.date()}`])
                    break;
                case 4: setNameDayType([`Friday ${nowMoment.date()}`])
                    break;
                case 5: setNameDayType([`Saturday ${nowMoment.date()}`])
                    break;
                case 6: setNameDayType([`Sunday ${nowMoment.date()}`])
                    break;
                case 7: setNameDayType([`Monday ${nowMoment.date()}`])
                    break;
                default: break;
            }
        }
    }

    return (
        <div className='year_select' onClick={showDropdown}>
            <p>type: {nowType}</p>
            <ArrowDown />
            <div className={isDropdownShown ? ' type shown' : ' type hidden'}>
                {typeArray.map(type =>
                    <div className={nowType === type ? 'year current' : 'year'}
                        key={type} onClick={() => { setNowType(type); checkTypeNameDay(type) }}>{type}</div>
                )}
            </div>
        </div >
    )
}
export default ChangeCalendarViewSelect