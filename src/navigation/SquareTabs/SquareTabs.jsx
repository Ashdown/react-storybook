import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SquareTab } from './'
import {PageFrame} from '../../layout/'
import { isTruthy, scrollToTop } from '../../util/helpers'


export default class SquareTabs extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    type: PropTypes.string,
    colour: PropTypes.string,
  }

  getChildren() {
    return React.Children.toArray(this.props.children).filter(isTruthy)
  }

  findTabFromHash = () => {
    const children = this.getChildren()
    const locationHash = location.hash.replace('#', '')
    return children.length > 0 && (children.map(child => child.props.hash).find((hash) => hash === locationHash))
  }

  getActiveTab = () => {
    const children = this.getChildren()
    return this.findTabFromHash() || children[0].props.hash
  }

  constructor(props) {
    super(props)
    this.state = {
      activeTab: this.getActiveTab(),
    }
  }

  onClickTab = (tab) => () => {
    this.setState({ activeTab: tab })
  }

  windowHashChange = () => {
    const activeTab = this.findTabFromHash()
    if(this.state.activeTab !== activeTab) {
      this.setState({
        activeTab,
      })
      scrollToTop()
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.windowHashChange)
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.windowHashChange)
  }

  componentWillUpdate() {
    const activeTab = this.getActiveTab()
    if (this.state.activeTab !== activeTab) {
      this.setState({ activeTab })
      scrollToTop()
    }
  }

  render() {
    const { type, colour = 'red' } = this.props
    const children = this.getChildren()
    const { onClickTab } = this
    const { activeTab } = this.state

    return (
      <div class="square-tabs">

        <PageFrame>
          <ol class="tabs">
            {children && React.Children.map(children, (child) => {
              const { label, hash } = child.props
              return (
                <SquareTab
                  isSelected={hash === activeTab}
                  key={hash}
                  hash={hash}
                  onClick={onClickTab(hash)}
                  type={type ? type : 'auto'}
                  colour={colour}
                >
                  {label}
                </SquareTab>
              )
            })}
          </ol>
        </PageFrame>
        <div class="square-tab-content">
          {children && React.Children.map(children, (child) => {
            if (child.props.hash !== activeTab) return null
            return child.props.children || child
          })}
        </div>

      </div>
    )
  }
}
