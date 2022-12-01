import React from 'react';
import UserCircle from '../../Button/UserButton/UserCircle'
import PeopleBox from '../../Box/PeopleBox/PeopleBox'
import './PeopleListStyle.css'

const PeopleList = ({ idUs, isAutor, dellPeople }) => {


    return (
        <div className='owerflow_box_pl'>
            <div className={idUs === isAutor ? 'box_people_pl activ_autor_pl' : 'box_people_pl'}>
                <UserCircle />
                <div className='name_people_pl'>Me</div>
            </div>

            <PeopleBox isAutor={isAutor} dellPeople={dellPeople} />
            {/* {daysArray.map((dayItem) => (
                <DayBox key={dayItem.format('DDMMYYYY')} dayItem={dayItem} classHoverDay={classHoverDay} month={month} />
            ))
            } */}
        </div>
    )
}
export default PeopleList