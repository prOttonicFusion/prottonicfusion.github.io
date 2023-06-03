import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/** Prevent client-only components from being rendered on the server.
 * This should avoid hydration mismatches */
const ClientOnly = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) {
        return null
    }

    return <>
        {children}
    </>
}

ClientOnly.propTypes = {
    children: PropTypes.node,
}

export default ClientOnly
