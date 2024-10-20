import React from 'react'
import { describe, expect, it, jest } from '@jest/globals'
import { render } from '@testing-library/react'
import Skills from '../skills'

jest.mock('../../../content/sections/skills.mdx', () => {
    return {
        __esModule: true,
        default: () => {
            return <div>Some content</div>
        },
    }
})

describe('Skills section', () => {
    it('renders skills correctly', () => {
        const { container } = render(
            <Skills />,
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
