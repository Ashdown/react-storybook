import React from 'react'
import PropTypes from 'prop-types'
import HorizontalSubMenu from './HorizontalSubMenu'

export default class HorizontalBoxFilterCheckboxList extends React.Component {
  static propTypes = {
    filter: PropTypes.object.isRequired,
    activeFilters: PropTypes.object,
    updateFilters: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    setOpenSubMenu: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }

  toggleItem = () => {
    const { filter, setOpenSubMenu, isOpen } = this.props
    setOpenSubMenu(isOpen ? null : filter.name)
  }

  render() {
    const { filter, updateFilters, activeFilters = [], className, isOpen } = this.props
    const { label } = filter
    const activeFilterCount = (activeFilters[filter.name] || []).length

    return (
      <li class={`${className} horizontal-box-filter-checkbox-list ${isOpen ? 'open' : 'closed'}`}>
        <button class="option-button" onClick={this.toggleItem}>
          {label} { activeFilterCount > 0 && `(${activeFilterCount})`}
        </button>
        <HorizontalSubMenu
          isOpen={isOpen}
          filter={filter}
          updateFilters={updateFilters}
          activeFilters={activeFilters}
        />
        <div class="border top-border"/>
        <div class="border right-border"/>
        <div class="border left-border"/>
        <div class="shadow"/>
      </li>
    )
  }
}
