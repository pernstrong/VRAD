import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = (props) => {

    const userMessage = () => {
        console.log(props)
       return props.userName && (<h3 className='user-message'> {props.userName}</h3>)
       
    }
    
    return(
        <header>
            <h1>V.R.A.D</h1>
            <p className='accronym'>Vacation Rentals Around Denver</p>
            {userMessage()}
        </header>
    )
}

export default Header