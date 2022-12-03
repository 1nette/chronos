import React from 'react';
import './NameDaysBoxStyle.css'
const NameDaysBox = ({ classBoxNameDay, nameDayType }) => {

    return (

        <div className={classBoxNameDay}>
            {nameDayType.map((index) => (
                <div key={index}>{index}</div>
            ))}
        </div>


    )
}
export default NameDaysBox