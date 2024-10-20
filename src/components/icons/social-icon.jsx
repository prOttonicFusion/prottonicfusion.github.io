import '../../styles/global.scss'
import React from 'react'
import PropTypes from 'prop-types'

const selectIcon = (service) => {
    switch (service) {
    case 'github':
        return (
            <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
            >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        )

    case 'linkedin':
        return (
            <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 3333 3333"
                fillRule="evenodd"
                clipRule="evenodd"
            >
                <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-215 1336h342v175h5c48-86 164-175 338-175 361 0 428 225 428 517v596h-357v-528c0-126-3-288-186-288-186 0-214 137-214 279v537h-357V1336zm-247-309c0 102-83 186-186 186-102 0-186-83-186-186 0-102 83-186 186-186 102 0 186 83 186 186zm-371 309h371v1113H834V1336z" />
            </svg>
        )

    case 'twitter':
        return (
            <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
            >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
            </svg>
        )

    case 'facebook':
        return (
            <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                x="0px"
                y="0px"
                enableBackground="new 0 0 30 30"
            >
                <circle cx="15" cy="15" r="15" />
                <path
                    fill="#FFFFFF"
                    d="M16.4,23.9v-8.1h2.7l0.4-3.2h-3.1v-2c0-0.9,0.3-1.5,1.6-1.5l1.7,0V6.2c-0.3,0-1.3-0.1-2.4-0.1
	        c-2.4,0-4.1,1.5-4.1,4.2v2.3h-2.7v3.2h2.7v8.1H16.4z"
                />
            </svg>
        )

    case 'instagram':
        return (
            <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 600 600"
                x="0px"
                y="0px"
                style={{ enableBackground: 'new 0 0 600 600' }}
            >
                <circle cx="300" cy="300" r="297.5" />
                <path
                    fill="#ffffff"
                    d="M300,123.5c-47.9,0-54,0.2-72.8,1.1c-18.8,0.9-31.6,3.8-42.8,8.2c-11.6,4.5-21.5,10.5-31.3,20.4
            c-9.8,9.8-15.8,19.7-20.4,31.3c-4.4,11.2-7.4,24.1-8.2,42.8c-0.8,18.8-1.1,24.8-1.1,72.8c0,47.9,0.2,53.9,1.1,72.8
            c0.9,18.8,3.8,31.6,8.2,42.8c4.5,11.6,10.5,21.5,20.4,31.3c9.8,9.8,19.7,15.9,31.3,20.4c11.2,4.4,24.1,7.3,42.8,8.2
            c18.8,0.9,24.8,1.1,72.8,1.1c47.9,0,53.9-0.2,72.8-1.1c18.8-0.9,31.6-3.8,42.9-8.2c11.6-4.5,21.4-10.6,31.2-20.4
            c9.8-9.8,15.8-19.7,20.4-31.3c4.3-11.2,7.3-24,8.2-42.8c0.8-18.8,1.1-24.8,1.1-72.8c0-47.9-0.2-53.9-1.1-72.8
            c-0.9-18.8-3.9-31.6-8.2-42.8c-4.5-11.6-10.6-21.5-20.4-31.3c-9.8-9.8-19.6-15.8-31.3-20.4c-11.3-4.4-24.1-7.3-42.9-8.2
            C353.9,123.7,347.9,123.5,300,123.5L300,123.5z M284.2,155.3c4.7,0,9.9,0,15.8,0c47.1,0,52.7,0.2,71.3,1
            c17.2,0.8,26.5,3.7,32.8,6.1c8.2,3.2,14.1,7,20.3,13.2c6.2,6.2,10,12.1,13.2,20.3c2.4,6.2,5.3,15.6,6.1,32.8
            c0.8,18.6,1,24.2,1,71.3c0,47.1-0.2,52.7-1,71.3c-0.8,17.2-3.7,26.5-6.1,32.8c-3.2,8.2-7,14.1-13.2,20.3c-6.2,6.2-12,10-20.3,13.2
            c-6.2,2.4-15.6,5.3-32.8,6.1c-18.6,0.8-24.2,1-71.3,1c-47.1,0-52.7-0.2-71.3-1c-17.2-0.8-26.5-3.7-32.8-6.1
            c-8.2-3.2-14.1-7-20.3-13.2c-6.2-6.2-10-12.1-13.2-20.3c-2.4-6.2-5.3-15.6-6.1-32.8c-0.8-18.6-1-24.2-1-71.3
            c0-47.1,0.2-52.7,1-71.3c0.8-17.2,3.7-26.5,6.1-32.8c3.2-8.2,7-14.1,13.2-20.3c6.2-6.2,12.1-10,20.3-13.2
            c6.2-2.4,15.6-5.3,32.8-6.1C245,155.5,251.3,155.3,284.2,155.3L284.2,155.3z M394.2,184.6c-11.7,0-21.2,9.5-21.2,21.2
            c0,11.7,9.5,21.2,21.2,21.2c11.7,0,21.2-9.5,21.2-21.2C415.4,194.1,405.9,184.6,394.2,184.6L394.2,184.6z M300,209.4
            c-50.1,0-90.6,40.6-90.6,90.6c0,50.1,40.6,90.6,90.6,90.6c50.1,0,90.6-40.6,90.6-90.6C390.6,249.9,350.1,209.4,300,209.4L300,209.4
            z M300,241.2c32.5,0,58.8,26.3,58.8,58.8c0,32.5-26.3,58.8-58.8,58.8c-32.5,0-58.8-26.3-58.8-58.8
            C241.2,267.5,267.5,241.2,300,241.2z"
                />
            </svg>
        )

    case 'email':
        return (
            <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
            >
                <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
            </svg>
        )

    case 'documentation':
        return (
            <svg
                className="social-icon"
                width="32"
                height="32"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
            >
                <path d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
        )

    case 'wordpress':
        return (
            <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 128 128"
                fillRule="evenodd"
                clipRule="evenodd"
            >
                <path d="M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.325 0-33.833-27.618-61.697-60.613-62.286-34.652-.618-63.608 27.5-63.617 61.597-.01 35.079 27.612 63.064 62.209 63.014zm-.101-121.594c32.907-.011 59.126 26.725 59.116 60.28-.011 31.679-26.925 58.18-59.092 58.187-32.771.007-59.125-26.563-59.124-59.608.002-32.193 26.766-58.848 59.1-58.859zM39.157 35.896c.538 1.793-.968 2.417-2.569 2.542-1.685.13-3.369.257-5.325.406 6.456 19.234 12.815 38.183 19.325 57.573.464-.759.655-.973.739-1.223 3.574-10.682 7.168-21.357 10.651-32.069.318-.977.16-2.271-.188-3.275-1.843-5.32-4.051-10.524-5.667-15.908-1.105-3.686-2.571-6.071-6.928-5.644-.742.073-1.648-1.524-2.479-2.349 1.005-.6 2.003-1.704 3.017-1.719 8.872-.135 17.747-.135 26.618.008 1.018.017 2.016 1.15 3.021 1.765-.88.804-1.639 2.01-2.668 2.321-1.651.498-3.482.404-5.458.58 6.463 19.225 12.793 38.057 19.349 57.56 2.931-9.736 5.658-18.676 8.31-27.639 2.366-8.001.956-15.473-3.322-22.52-1.286-2.119-2.866-4.175-3.595-6.486-.828-2.629-1.516-5.622-1.077-8.259.745-4.469 4.174-6.688 8.814-7.113-25.392-23.566-65.294-15.13-79.997 10.475 5.66-.261 11.064-.604 16.472-.678 1.022-.013 2.717.851 2.957 1.652zM49.274 113.867c-.118.345-.125.729-.218 1.302 10.943 3.034 21.675 2.815 32.659-.886l-16.78-45.96c-5.37 15.611-10.52 30.575-15.661 45.544zM40.818 111.789l-25.281-69.35c-11.405 22.278-2.729 56.268 25.281 69.35zM117.246 67.227c.802-10.534-2.832-25.119-5.97-27.125-.35 3.875-.106 8.186-1.218 12.114-2.617 9.255-5.817 18.349-8.899 27.468-3.35 9.912-6.832 19.779-10.257 29.666 16.092-9.539 24.935-23.618 26.344-42.123z"></path>
            </svg>
        )

    default:
        return (
            <svg
                className="social-icon"
                width="32"
                height="32"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
            </svg>
        )
    }
}

const SocialIcon = ({ service, url, label }) =>
    <span>
        <a href={url} title={label}>
            {selectIcon(service)}
        </a>
    </span>

SocialIcon.propTypes = {
    service: PropTypes.string,
    url: PropTypes.string,
    label: PropTypes.string,
}

export default SocialIcon