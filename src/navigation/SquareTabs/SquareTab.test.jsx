import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import SquareTab from './SquareTab'

describe('SquareTab - unselected', () => {
  const mockFunction = jest.fn()
  const component = (
    <SquareTab
      isSelected={false}
      hash={'test-content'}
      onClick={mockFunction}
      type="auto"
      colour="red"
    >Test Content</SquareTab>
  )
  let container
  beforeEach(() => {
    container = render(component).container
  })

  it('renders link correctly', () => {
    const link = container.querySelector('a')
    expect(link).toHaveTextContent('Test Content')
    expect(link).toHaveAttribute('href', '#test-content')
  })

  it('renders as selected or not selected', () => {
    expect(container.firstChild).toHaveClass('non-selected')
  })

  it('renders type correctly', () => {
    expect(container.firstChild).toHaveClass('auto-type')
  })

  it('calls onClick function', () => {
    fireEvent.click(container.firstChild)
    const { mock: { calls } } = mockFunction
    expect(calls.length).toBe(1)
  })
})

describe('SquareTab - pre-selected', () => {
  const mockFunction = jest.fn()
  const component = (
    <SquareTab
      isSelected={true}
      hash={'test-content'}
      onClick={mockFunction}
      type="quarter"
      colour="red"
    >Test Content</SquareTab>
  )
  let container
  beforeEach(() => {
    container = render(component).container
  })

  it('renders as selected', () => {
    expect(container.firstChild).toHaveClass('selected')
  })

  it('renders type correctly', () => {
    expect(container.firstChild).toHaveClass('quarter-type')
  })
})
