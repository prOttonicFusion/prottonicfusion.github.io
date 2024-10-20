import '../styles/components/tooltip.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const WithTooltip = ({ label, className, children, ...rest }) => {
    const [isShown, setIsShown] = useState(false)

    return (
        <div className={cx('tooltip-container', className)} {...rest}>
            <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                role="presentation"
            >
                {children}
            </div>
            <div className={cx('tooltip-label', { 'show': isShown })}>
                <div className="tooltip-point" />
                {label}
            </div>
        </div>
    )
}

WithTooltip.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
}

export default WithTooltip
