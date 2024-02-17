import * as React from 'react'

const ttfFonts = [
    'RobotoMono-Regular.ttf',
    'RobotoMono-Italic.ttf',
    'RobotoMono-Bold.ttf',
    'Roboto-Regular.ttf',
    'Roboto-Light.ttf',
    'Roboto-LightItalic.ttf',
    'Roboto-Medium.ttf',
]

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        ...ttfFonts.map((font) =>
            <link
                rel="preload"
                href={`/fonts/${font}`}
                as="font"
                type="font/ttf"
                crossOrigin="anonymous"
                key="interFont"
            />
        ),
    ])
}
