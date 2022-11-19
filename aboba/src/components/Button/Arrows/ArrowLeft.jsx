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
        <div className='arrow_side'>
            <div className='arrows left' onClick={changeIndex}></div>
        </div>
    )
}
export default ArrowLeft