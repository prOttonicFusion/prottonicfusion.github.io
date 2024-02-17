import * as React from 'react'

const woffFonts = [
    'RobotoMono-Regular.woff',
    'RobotoMono-Italic.woff',
    'RobotoMono-Bold.woff',
    'Roboto-Regular.woff',
    'Roboto-Light.woff',
    'Roboto-Italic.woff',
    'Roboto-Medium.woff',
]

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        ...woffFonts.map((font) =>
            <link
                rel="preload"
                href={`/fonts/${font}`}
                as="font"
                type="font/woff"
                crossOrigin="anonymous"
                key="interFont"
            />
        ),
    ])
}
