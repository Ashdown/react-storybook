import React from 'react'
import { render } from 'react-testing-library'

import PageFrame from './PageFrame'

describe('PageFrame', () => {
  it('renders content with no default colour', () => {
    const { container } = render(<PageFrame>Test Content</PageFrame>)
    expect(container).toHaveTextContent('Test Content')
    expect(container.firstChild).toHaveClass('page-frame')
    expect(container.firstChild).not.toHaveClass('red')
    expect(container.firstChild).not.toHaveClass('white')
    expect(container.firstChild).not.toHaveClass('blue')
    expect(container.firstChild).not.toHaveClass('grey')
  })

  it('sets colour class when defined', () => {
    const { container: redWrapper } = render(<PageFrame colour="red" />)
    const { container: whiteWrapper } = render(<PageFrame colour="white" />)
    const { container: blueWrapper } = render(<PageFrame colour="blue" />)
    const { container: greyWrapper } = render(<PageFrame colour="grey" />)
    expect(redWrapper.firstChild).toHaveClass('red')
    expect(whiteWrapper.firstChild).toHaveClass('white')
    expect(blueWrapper.firstChild).toHaveClass('blue')
    expect(greyWrapper.firstChild).toHaveClass('grey')
  })
})
