import React from 'react';
import './ArrowsStyle.css'

const ArrowRight = ({ index, setIndex }) => {
    const changeIndex = event => {
        if (index === 11) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    return (
        <div className='arrow_side' onClick={changeIndex}>
            <div className='arrows right'></div>
        </div>
    )
}
export default ArrowRight