import React from 'react';
import DayBox from '../../Box/DayBox/DayBox';
import './DaysListStyle.css'

const DaysList = ({ classBoxDay }) => {
    // const totallDay = 42
    const daysArray = [...Array(42)]

    return (
        <div className={classBoxDay}>
            {daysArray.map((_, i) => (
                <DayBox i={i} />
            ))
            }
        </div>

    )
}
export default DaysList