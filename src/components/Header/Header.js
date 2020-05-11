import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = (props) => {

    return(
        <header>
            <h1>V.R.A.D</h1>
            <p className='accronym'>Vacation Rentals Around Denver</p>
            <h3 className='user-message'>Welcome, Lauren</h3>
        </header>
    )
}

export default Header