import React from 'react';
import './NameDaysBoxStyle.css'




const NameDaysBox = ({ classBoxNameDay }) => {

    return (
        <div className={classBoxNameDay}>
            <div>Monday</div>
            <div>Tuesday </div>
            <div>Wednesday </div>
            <div>Thursday </div>
            <div>Friday </div>
            <div>Saturday </div>
            <div>Sunday </div>
        </div >

    )
}
export default NameDaysBox