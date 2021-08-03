import React from 'react'
import { render } from '@testing-library/react'
import { withQuerySnapshot } from 'gatsby-plugin-testing'
import Banner from '../banner'

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
