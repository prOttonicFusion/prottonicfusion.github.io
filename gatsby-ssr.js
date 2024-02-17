import * as React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/RobotoMono-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/RobotoMono-Italic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/RobotoMono-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="interFont"
        />,
    ])
}
