import React from 'react';
import './BurgerStyle.css'

const Burger = () => {
    let check = 'true';
    const click = event => {
        if (check === 'true')
            check = 'false'
        else {
            check = 'true'
        }
        console.log(check)
    }

    return (
        <div className={check === 'true' ? 'icon nav-icon-6' : 'open icon nav-icon-6 open'} onClick={click}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default Burger