import '../styles/components/dev-icon.scss'
import React from 'react'
import PropTypes from 'prop-types'
import WithTooltip from './tooltip'
import cppLogo from '../assets/devIcons/cplusplus-plain.svg'
import cssLogo from '../assets/devIcons/css3-plain.svg'
import devIconLogo from '../assets/devIcons/devicon.svg'
import dockerLogo from '../assets/devIcons/docker-plain.svg'
import fortranLogo from '../assets/devIcons/fortran.svg'
import gimpLogo from '../assets/devIcons/gimp-plain.svg'
import gitHubLogo from '../assets/devIcons/gitHub.svg'
import htmlLogo from '../assets/devIcons/html5-plain.svg'
import illustratorLogo from '../assets/devIcons/illustrator-plain.svg'
import inkscapeLogo from '../assets/devIcons/inkscape-plain.svg'
import javascriptLogo from '../assets/devIcons/javascript-plain.svg'
import lammpsLogo from '../assets/devIcons/lammps.svg'
import macLogo from '../assets/devIcons/apple.svg'
import mysqlLogo from '../assets/devIcons/mysql-plain.svg'
import nodejsLogo from '../assets/devIcons/nodejs-plain.svg'
import openmpiLogo from '../assets/devIcons/open-mpi.svg'
import photoshopLogo from '../assets/devIcons/photoshop-plain.svg'
import pythonLogo from '../assets/devIcons/python-plain.svg'
import qtLogo from '../assets/devIcons/qt.svg'
import reactLogo from '../assets/devIcons/react-original.svg'
import rustLogo from '../assets/devIcons/rust-plain.svg'
import sqliteLogo from '../assets/devIcons/sqlite.svg'
import swiftLogo from '../assets/devIcons/swift-plain.svg'
import typescriptLogo from '../assets/devIcons/typescript-plain.svg'
import ubuntuLogo from '../assets/devIcons/ubuntu-plain.svg'
import wordpressLogo from '../assets/devIcons/wordpress-plain.svg'
import postgresLogo from '../assets/devIcons/postgresql-plain.svg'

const iconData = {
    'c++': {
        icon: cppLogo,
        label: 'C++',
    },
    css: {
        icon: cssLogo,
        label: 'CSS',
    },
    default: {
        icon: devIconLogo,
        label: '',
    },
    docker: {
        icon: dockerLogo,
        label: 'Docker',
    },
    fortran: {
        icon: fortranLogo,
        label: 'Fortran95',
    },
    gimp: {
        icon: gimpLogo,
        label: 'GIMP',
    },
    github: {
        icon: gitHubLogo,
        label: 'GitHub',
    },
    html: {
        icon: htmlLogo,
        label: 'HTML',
    },
    illustrator: {
        icon: illustratorLogo,
        label: 'Adobe Illustrator',
    },
    inkscape: {
        icon: inkscapeLogo,
        label: 'InkScape',
    },
    javascript: {
        icon: javascriptLogo,
        label: 'JavaScript',
    },
    lammps: {
        icon: lammpsLogo,
        label: 'LAMMPS',
    },
    mac: {
        icon: macLogo,
        label: 'macOs',
    },
    mysql: {
        icon: mysqlLogo,
        label: 'MySQL',
    },
    nodejs: {
        icon: nodejsLogo,
        label: 'node.js',
    },
    openmpi: {
        icon: openmpiLogo,
        label: 'OpenMPI',
    },
    photoshop: {
        icon: photoshopLogo,
        label: 'Adobe Photoshop',
    },
    python: {
        icon: pythonLogo,
        label: 'Python',
    },
    qt: {
        icon: qtLogo,
        label: 'QT',
    },
    react: {
        icon: reactLogo,
        label: 'React/React Native',
    },
    rust: {
        icon: rustLogo,
        label: 'Rust',
    },
    sqlite: {
        icon: sqliteLogo,
        label: 'SQLite',
    },
    swift: {
        icon: swiftLogo,
        label: 'Swift',
    },
    typescript: {
        icon: typescriptLogo,
        label: 'TypeScript',
    },
    ubuntu: {
        icon: ubuntuLogo,
        label: 'Ubuntu/Linux',
    },
    wordpress: {
        icon: wordpressLogo,
        label: 'WordPress',
    },
    postgresql: {
        icon: postgresLogo,
        label: 'PostgreSQL',
    },
}

const DevIcon = ({ tool, height }) => {
    const { icon, label } = tool in iconData ? iconData[tool] : iconData['default']

    return (
        <WithTooltip label={label} className="dev-icon-container">
            <img
                src={icon}
                className="dev-icon"
                height={height ? height : '15px'}
                alt={'Dev icon'}
            />
        </WithTooltip>
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
