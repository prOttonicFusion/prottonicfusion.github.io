import React from 'react'
import PropTypes from 'prop-types'
import '../styles/global.scss'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export const iconsByName = {
    'c++': {
        icon: '/assets/devIcons/cplusplus-plain.svg',
        label: 'C++',
    },
    css: {
        icon: '/assets/devIcons/css3-plain.svg',
        label: 'CSS',
    },
    default: {
        icon: '/assets/devIcons/devicon.svg',
        label: '',
    },
    docker: {
        icon: '/assets/devIcons/docker-plain.svg',
        label: 'Docker',
    },
    fortran: {
        icon: '/assets/devIcons/fortran-logo.png',
        label: 'Fortran95',
    },
    gimp: {
        icon: '/assets/devIcons/gimp-plain.svg',
        label: 'GIMP',
    },
    github: {
        icon: '/assets/devIcons/gitHub.svg',
        label: 'GitHub',
    },
    html: {
        icon: '/assets/devIcons/html5-plain.svg',
        label: 'HTML',
    },
    illustrator: {
        icon: '/assets/devIcons/illustrator-plain.svg',
        label: 'Adobe Illustrator',
    },
    inkscape: {
        icon: '/assets/devIcons/inkscape-plain.svg',
        label: 'InkScape',
    },
    javascript: {
        icon: '/assets/devIcons/javascript-plain.svg',
        label: 'JavaScript',
    },
    lammps: {
        icon: '/assets/devIcons/LAMMPS-logo.png',
        label: 'LAMMPS',
    },
    mac: {
        icon: '/assets/devIcons/apple.svg',
        label: 'macOs',
    },
    mysql: {
        icon: '/assets/devIcons/mysql-plain.svg',
        label: 'MySQL',
    },
    nodejs: {
        icon: '/assets/devIcons/nodejs-plain.svg',
        label: 'node.js',
    },
    openmpi: {
        icon: '/assets/devIcons/open-mpi-logo.png',
        label: 'OpenMPI',
    },
    photoshop: {
        icon: '/assets/devIcons/photoshop-plain.svg',
        label: 'Adobe Photoshop',
    },
    python: {
        icon: '/assets/devIcons/python-plain.svg',
        label: 'Python',
    },
    qt: {
        icon: '/assets/devIcons/qt-logo.png',
        label: 'QT',
    },
    react: {
        icon: '/assets/devIcons/react-original.svg',
        label: 'React/React Native',
    },
    rust: {
        icon: '/assets/devIcons/rust-plain.svg',
        label: 'Rust',
    },
    sqlite: {
        icon: '/assets/devIcons/sqlite.svg',
        label: 'SQLite',
    },
    swift: {
        icon: '/assets/devIcons/swift-plain.svg',
        label: 'Swift',
    },
    typescript: {
        icon: '/assets/devIcons/typescript-plain.svg',
        label: 'TypeScript',
    },
    ubuntu: {
        icon: '/assets/devIcons/ubuntu-plain.svg',
        label: 'Ubuntu/Linux',
    },
    wordpress: {
        icon: '/assets/devIcons/wordpress-plain.svg',
        label: 'WordPress',
    },
    postgresql: {
        icon: '/assets/devIcons/postgresql-plain.svg',
        label: 'PostgreSQL',
    },
}

const DevIcon = ({ tool, height }) => {
    const { icon, label } = tool in iconsByName ? iconsByName[tool] : iconsByName['default']

    return (
        <OverlayTrigger
            key={tool}
            placement="bottom"
            overlay={<Tooltip>{label}</Tooltip>}
        >
            <img
                src={icon}
                className="dev-icon"
                height={height ? height : '15px'}
                alt={'Dev icon'}
            />
        </OverlayTrigger>
    )
}

DevIcon.propTypes = {
    tool: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default DevIcon
