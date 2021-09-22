import React from 'react'
import PropTypes from 'prop-types'
import { ToggleSwitch, TextInput } from '../../inputs/'
import HorizontalBoxFilterCheckboxList from './HorizontalBoxFilterCheckboxList'

export default class HorizontalBoxFilter extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    filterOptions: PropTypes.array.isRequired,
    doFiltersMatchPreferences: PropTypes.bool.isRequired,
    updateFilters: PropTypes.func.isRequired,
    activeFilters: PropTypes.object.isRequired,
    resetFilters: PropTypes.func.isRequired,
    selectAllFilters: PropTypes.func.isRequired,
    showPrefsButton: PropTypes.bool.isRequired,
    itemName: PropTypes.string.isRequired,
    allFiltersSet: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    disabled: false,
  }

  state = {
    openSubMenu: null,
  }

  resetAndClose = () => {
    this.setState({ openSubMenu: null })
    this.props.resetFilters()
  }

  selectAllFiltersAndClose = () => {
    this.setState({ openSubMenu: null })
    this.props.selectAllFilters()
  }

  setOpenSubMenu = openSubMenu => {
    const { disabled } = this.props
    !disabled && this.setState({ openSubMenu })
  }

  checkForBlur = event => !this.node.contains(event.target) && this.setState({ openSubMenu: null })

  componentWillMount() {
    document.addEventListener('mousedown', this.checkForBlur, false)
  }

  render() {
    const {
      filterOptions,
      updateFilters,
      activeFilters,
      doFiltersMatchPreferences,
      showPrefsButton,
      itemName,
      allFiltersSet,
    } = this.props

    return (
      <div class="horizontal-box-filter" ref={node => this.node = node}>
        <div class="box-filter-content">
          <div class="button-container">
            <h2 class="body-text explanation-title">Filter by:</h2>
            <ul>
              {showPrefsButton &&
              <li class="option-menu-item has-toggle-switch">
                <ToggleSwitch
                  colour="red"
                  getValue={() => doFiltersMatchPreferences}
                  setValue={() => this.resetAndClose()}
                  disabled={doFiltersMatchPreferences}
                >
                  My preferences
                </ToggleSwitch>
              </li>
              }
              {filterOptions.map(filter => {
                switch (filter.type) {
                  case 'searchbox' :
                    return <li className="option-menu-item has-searchbox" key={filter.name}>
                      <TextInput
                        name="search"
                        className="searchbox"
                        placeholder={filter.label}
                        setValue={value => updateFilters('toggle')({ [filter.name]: value })}
                        getValue={() => activeFilters[filter.name] ? activeFilters[filter.name] : ''}
                      />
                    </li>
                  case 'toggle':
                    return <li className="option-menu-item has-toggle-switch" key={filter.name}>
                      <ToggleSwitch
                        name={filter.name}
                        colour="red"
                        value={activeFilters[filter.name]}
                        getValue={() => activeFilters[filter.name]}
                        setValue={value => updateFilters('toggle')({ [filter.name]: value })}
                      >
                        {filter.label}
                      </ToggleSwitch>
                    </li>
                  case 'checkboxes':
                    return <HorizontalBoxFilterCheckboxList
                      key={filter.name}
                      className="option-menu-item has-checkbox-list"
                      isOpen={this.state.openSubMenu === filter.name}
                      filter={filter}
                      activeFilters={activeFilters}
                      updateFilters={updateFilters}
                      setOpenSubMenu={this.setOpenSubMenu}
                    />
                }
              })}
            </ul>
            <div class="side-content">
              <button class={`square-button remove-all-button ${allFiltersSet ? 'disabled' : ''}`} onClick={this.selectAllFiltersAndClose}>
                Show all {itemName}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.checkForBlur, false)
  }
}
