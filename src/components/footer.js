import '../styles/global.scss'
import React from 'react'
import SocialIcon from './social-icon'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Footer = () => {
    const { contactOptions, author } = useSiteMetadata()

    return (
        <div className={'site-footer'}>
            <div className={'social-icon-container'}>
                {contactOptions.map((contactOption) =>
                    <SocialIcon
                        service={contactOption.name}
                        url={contactOption.url}
                        label={contactOption.label}
                        key={contactOption.url}
                    ></SocialIcon>,
                )}
            </div>
            <div className="copyright-container">
                {new Date().getFullYear()} &copy; {author}
            </div>
        </div>
    )
}


export default Footer
