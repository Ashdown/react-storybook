import React from 'react'
import PropTypes from 'prop-types'
import { PageFrame } from '../../layout/'
import classnames from 'classnames'
import { Checkbox, Form, TextInput } from '../../inputs'

export default class CompactSubMenu extends React.Component {
  static propTypes = {
    filterName: PropTypes.string.isRequired,
    closeMainMenu: PropTypes.func.isRequired,
    closeSubMenu: PropTypes.func.isRequired,
    filterOptions: PropTypes.array.isRequired,
    activeFilterOptions: PropTypes.array,
    updateFilters: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }

  state = {
    filterScreenText: '',
  }

  screenFilters = data => this.setState({ filterScreenText: data.search.toLowerCase() })

  onClose = () => {
    this.setState({ filterScreenText: '' })
    this.props.closeMainMenu()
  }

  onBack = () => {
    this.setState({ filterScreenText: '' })
    this.props.closeSubMenu()
  }

  render() {
    const { filterName, filterOptions, activeFilterOptions = [], updateFilters, isOpen } = this.props
    const { filterScreenText } = this.state
    const hasSearch = filterOptions.length > 10
    return (
      <div class={`compact-sub-menu ${isOpen ? 'open' : 'closed'} ${hasSearch ? 'with-search' : ''} ${filterName}`}>
        <PageFrame classname="sub-menu-header">
          <ul class="nav-button-list">
            <li class="nav-button-container">
              <button class="square-button transparent-grey nav-button" onClick={this.onBack}>Back</button>
            </li>
            <li class="nav-button-container">
              <button class="square-button red-red nav-button" onClick={this.onClose}>Done</button>
            </li>
          </ul>
          {hasSearch &&
          <Form onChange={this.screenFilters}>
            <TextInput.Controlled
              name="search"
              placeholder={`Search all ${filterName}`}
              className="filter-search-input"
            />
          </Form>
          }
        </PageFrame>
        <PageFrame>
          <Form onChange={updateFilters(filterName)}>
            <ul>
              {filterOptions.map(option =>
                <li key={option.value} class={classnames(`${option.value}-filter-item`, { hidden: option.value.indexOf(filterScreenText) })}>
                  <Checkbox.Controlled
                    name={option.value}
                    checkboxlabel={option.label}
                    postscript={option.postscript}
                    isSquare
                    value={activeFilterOptions.includes(option.value)}
                  />
                </li>)}
            </ul>
          </Form>
        </PageFrame>
      </div>
    )
  }
}
