import React from 'react'
import { render } from '@testing-library/react'
import { jest } from '@jest/globals'
import Skills from '../skills'

jest.mock('../../sections/skills.mdx', () => {
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
