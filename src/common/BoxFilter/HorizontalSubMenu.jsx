import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Checkbox, Form, TextInput } from '../../inputs'

export default class HorizontalSubMenu extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    filter: PropTypes.object.isRequired,
    updateFilters: PropTypes.func.isRequired,
    activeFilters: PropTypes.object,
  }

  state = {
    filterScreenText: '',
  }

  screenFilters = data => this.setState({ filterScreenText: data.search.toLowerCase() })

  onFormChange = filterName => data => this.props.updateFilters(filterName)(data)

  render() {
    const { isOpen, filter, activeFilters = [] } = this.props
    const { name, options } = filter
    const { filterScreenText } = this.state
    const activeFilterOptions = activeFilters[filter.name] ? activeFilters[filter.name] : []
    const hasSearch = filter.options.length > 10

    return (
      <div class={`horizontal-sub-menu ${isOpen ? 'open' : 'closed'}`}>
        <div class="face">
          {hasSearch &&
          <Form onChange={this.screenFilters}>
            <TextInput.Controlled
              name="search"
              placeholder={`Search all ${name}`}
              className="filter-search-input"
            />
          </Form>
          }
          <Form className="checkbox-container" onChange={this.onFormChange(filter.name)}>
            <ul>
              {options.map(option =>
                <li key={option.value} class={classnames('option-item', option.value, { hidden: option.label.toLowerCase().indexOf(filterScreenText) })}>
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
          <div class="sub-menu-top-border border"/>
          <div class="sub-menu-right-border border"/>
          <div class="sub-menu-bottom-border border"/>
          <div class="sub-menu-left-border border"/>
        </div>
      </div>
    )
  }
}
