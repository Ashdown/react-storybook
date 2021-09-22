import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PageFrame } from '../../layout/'
import classNames from 'classnames'

const ONE_HUNDRED_PERCENT = '100%'

export default class Accordion extends Component {
  static propTypes = {
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    colour: PropTypes.string,
    isOpen: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    const { isOpen = false } = props
    const isActive = !isOpen
    this.state = {
      isActive,
      isOpen,
      contentHeight: isOpen ? ONE_HUNDRED_PERCENT : 0,
    }
  }

  toggleAccordion = () => {
    const closeAccordion = () => {
      this.setState({
        isOpen: false,
        contentHeight: 0,
      })
    }

    const openAccordion = () => {
      this.setState({
        isOpen: true,
        contentHeight: this.refs.childrenContainer.clientHeight,
      })
    }

    if (!this.state.isActive) {
      //if Accordion has not been activated yet, set the clientHeight to a px value, and close it after a delay
      this.setState({
        contentHeight: this.refs.childrenContainer.clientHeight,
        isActive: true,
      })
      const TIMEOUT_DELAY = 250
      window.setTimeout(closeAccordion, TIMEOUT_DELAY)
    } else if (this.state.isOpen) {
      closeAccordion()
    } else {
      openAccordion()
    }
  }

  updateContentHeight = () => {
    if (this.state.isOpen) {
      this.setState({
        contentHeight: this.refs.childrenContainer.clientHeight,
      })
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateContentHeight)
    if (this.state.isActive) {
      this.updateContentHeight()
    }
  }

  haveChildrenChanged = (newChildren) =>
    React.Children.toArray(this.props.children).length !== newChildren.length

  componentDidUpdate(prevProps) {
    const { children } = prevProps
    if (this.haveChildrenChanged(React.Children.toArray(children))) {
      this.updateContentHeight()
    }
  }

  render() {
    const { colour = 'red', header, children } = this.props
    const { isOpen, contentHeight } = this.state

    return (
      <div class={classNames(
        'accordion',
        { open: isOpen },
        colour
      )}>
        <PageFrame>
          <h3 className="abstract-text">
            <button
              className="accordion-link"
              onClick={this.toggleAccordion}
            >
              <span>{header}</span>
              <span className="chevron-icon" />
            </button>
          </h3>
        </PageFrame>
        <div style={{ height: contentHeight }} className="accordion-content">
          <div class="children-container" ref="childrenContainer">
            {children}
          </div>
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateContentHeight)
  }
}
