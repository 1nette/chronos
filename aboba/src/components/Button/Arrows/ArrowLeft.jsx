import React from 'react';
import './ArrowsStyle.css'

const ArrowLeft = ({ index, setIndex }) => {
    const changeIndex = event => {
        if (index === 0) {
            setIndex(11);
        }
        else {
            setIndex(index - 1);
        }
    }

    return (
        <div className='arrow_side' onClick={changeIndex}>
            <div className='arrows left'></div>
        </div>
    )
}
export default ArrowLeft