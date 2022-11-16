import React from 'react'
import PropTypes from 'prop-types'

const HamburgerMenuIcon = ({ width = '24px', height = '24px', fill = '#424242' }) =>
    // https://heroicons.com/
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...{ width, height, fill }}>
        <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"
        />
    </svg>

HamburgerMenuIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
}

export default HamburgerMenuIcon
