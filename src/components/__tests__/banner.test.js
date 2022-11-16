import React from 'react'
import { render } from '@testing-library/react'
import { withQuerySnapshot } from 'gatsby-plugin-testing'
import Banner from '../banner'

// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})

describe('Page banner', () => {
    it('renders root page banner correctly', withQuerySnapshot(() => {
        const { container } = render(
            <Banner location="/"/>,
        )
        expect(container.firstChild).toMatchSnapshot()
    }))

    it('renders child page banner correctly', withQuerySnapshot(() => {
        const { container } = render(
            <Banner location="/some/page"/>,
        )
        expect(container.firstChild).toMatchSnapshot()
    }))
})
