/* eslint no-magic-numbers: 0 */

import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import SquareTabs from './SquareTabs'

describe('SquareTabs', () => {
  const SquareTabsComponent = (
    <SquareTabs type="quarter">
      <div label="First Tab" hash="first" >
        First Content
      </div>
      <div label="Second Tab" hash="two" >
        Second Content
      </div>
      <div label="Third Tab" hash="third" >
        Third Content
      </div>
    </SquareTabs>
  )
  let container
  let tabs
  beforeEach(() => {
    container = render(SquareTabsComponent).container
    tabs = container.querySelectorAll('.square-tab')
  })

  it('renders tabs correctly, selecting first by default', () => {
    expect(tabs.length).toEqual(3)
    expect(tabs[0]).toHaveClass('quarter-type')
    expect(tabs[0]).toHaveClass('selected')
    expect(container.querySelector('.square-tab-content')).toHaveTextContent('First Content')
  })

  it('displays the correct content when a tab is selected', () => {
    const secondTab = tabs[1]
    fireEvent.click(secondTab)
    expect(secondTab).toHaveClass('selected')
    expect(container.querySelector('.square-tab-content')).toHaveTextContent('Second Content')
    expect(tabs[0]).not.toHaveClass('selected')
  })

  describe('rendering components that DO NOT render children', () => {
    it('renders component correctly', () => {
      const SpecialComponent = () => <div>Foo</div>

      const { container } = render(<SquareTabs><SpecialComponent label="My Tab" hash="my-tab" /></SquareTabs>)
      const tabs = container.querySelectorAll('.square-tab')

      expect(tabs.length).toEqual(1)
      expect(container.querySelector('.square-tab-content')).toHaveTextContent('Foo')
    })
  })
})
