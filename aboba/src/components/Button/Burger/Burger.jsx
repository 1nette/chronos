import React, { useState } from 'react';
import './BurgerStyle.css'

const Burger = () => {
    const [check, setCheck] = useState(true);
    const click = event => {
        if (check === true)
            setCheck(false)
        else {
            setCheck(true)
        }
        console.log(check)
    }

    return (
        <div className={check === true ? 'icon nav-icon-6' : 'open  icon nav-icon-6 '} onClick={click}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default Burger