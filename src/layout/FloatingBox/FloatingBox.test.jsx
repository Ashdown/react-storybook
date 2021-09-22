import React from 'react'
import { render } from 'react-testing-library'

import FloatingBox from './FloatingBox'

describe('FloatingBox', () => {
  it('renders content and defaults to red', () => {
    const { container } = render(<FloatingBox><span>Test Content</span></FloatingBox>)
    expect(container.firstChild).toHaveClass('red')
    expect(container).toHaveTextContent('Test Content')
  })

  it('sets colour class to blue when defined', () => {
    const { container } = render(<FloatingBox colour="blue"><span>Test Content</span></FloatingBox>)
    expect(container.firstChild).toHaveClass('blue')
  })

  it('adds a custom class when specified', () => {
    const { container } = render(<FloatingBox classname="my-custom-class"><span>Test Content</span></FloatingBox>)
    expect(container.firstChild).toHaveClass('my-custom-class')
  })

  it('floats only on command', () => {
    const DefaultFloatingBox = render(<FloatingBox><span>Test Content</span></FloatingBox>).container
    const VisibleFloatingBox = render(<FloatingBox visible><span>Test Content</span></FloatingBox>).container
    expect(DefaultFloatingBox.firstChild).not.toHaveClass('visible')
    expect(VisibleFloatingBox.firstChild).toHaveClass('visible')
  })
})
