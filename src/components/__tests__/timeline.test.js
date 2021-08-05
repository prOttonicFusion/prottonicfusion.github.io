import React from 'react'
import { render } from '@testing-library/react'
import { jest } from '@jest/globals'
import Timeline from '../timeline'

jest.mock('../../sections/timeline.mdx', () => {
    return {
        __esModule: true,
        default: () => {
            return <div>Some content</div>
        },
    }
})

describe('Timeline', () => {
    it('renders timeline correctly', () => {
        const { container } = render(
            <Timeline />,
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
