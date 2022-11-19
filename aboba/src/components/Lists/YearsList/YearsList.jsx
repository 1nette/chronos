import React from 'react';

const YearsList = ({ yearsArray, isDropdownShown }) => {
    return (
        <div className={isDropdownShown ? 'year_dropdown shown' : 'year_dropdown hidden'}>
            {yearsArray.map(year =>
                <div className='year' key={year}>{year}</div>
            )}
        </div>
    )
}
export default YearsList