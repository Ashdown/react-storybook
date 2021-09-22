import React from 'react'
import PropTypes from 'prop-types'
import { PageFrame } from '../../layout/'
import { TextInput, ToggleSwitch}  from '../../inputs/'
import CompactSubMenu from './CompactSubMenu'

const getActiveFilterCount = (activeFilters, filter) => (activeFilters[filter.name] || []).length

const SubMenuItem = ({ filter, activeFilters, setFilterOptions, updateFilters, openFilter, toggleMainMenu }) =>
  <li>
    <button class="chevron-right-button open-sub-menu-button" onClick={() => setFilterOptions(filter.name)}>
      {filter.label} { getActiveFilterCount(activeFilters, filter) > 0 && `(${getActiveFilterCount(activeFilters, filter)})`}
    </button>
    <CompactSubMenu
      filterName={filter.name}
      closeSubMenu={() => setFilterOptions(null)}
      closeMainMenu={toggleMainMenu}
      filterOptions={filter.options}
      activeFilterOptions={activeFilters[filter.name]}
      updateFilters={updateFilters}
      isOpen={openFilter === filter.name}
    />
  </li>

const SearchboxItem = ({ filter, activeFilters, updateFilters }) =>
  <li>
    <PageFrame>
      <TextInput
        name="search"
        className="option-menu-item searchbox"
        placeholder={filter.label}
        getValue={() => activeFilters[filter.name] ? activeFilters[filter.name] : ''}
        setValue={value => updateFilters('toggle')({ [filter.name]: value })}
      />
    </PageFrame>
  </li>

const ToggleItem = ({ filter, activeFilters, updateFilters }) =>
  <li>
    <PageFrame>
      <ToggleSwitch
        key={filter.name}
        name={filter.name}
        className="option-menu-item"
        colour="red"
        getValue={() => activeFilters[filter.name]}
        setValue={value => updateFilters('toggle')({ [filter.name]: value })}
      >
        {filter.label}
      </ToggleSwitch>
    </PageFrame>
  </li>

export default class CompactBoxFilter extends React.Component {
  static propTypes = {
    filterOptions: PropTypes.array.isRequired,
    updateFilters: PropTypes.func.isRequired,
    activeFilters: PropTypes.object.isRequired,
    resetFilters: PropTypes.func.isRequired,
    selectAllFilters: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    showPrefsButton: PropTypes.bool,
    itemName: PropTypes.string,
    allFiltersSet: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    disabled: false,
    showPrefsButton: true,
    itemName: 'jobs',
  }

  state = {
    isOpen: false,
    openFilter: null,
  }

  toggleMainMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      openFilter: null,
    })
  }

  setFilterOptions = filter => this.setState({ openFilter: filter })

  resetAndClose = () => {
    this.setState({ isOpen: false })
    this.props.resetFilters()
  }

  selectAllFiltersAndClose = () => {
    this.setState({ isOpen: false })
    this.props.selectAllFilters()
  }

  render() {
    const { isOpen, openFilter } = this.state
    const { activeFilters, disabled, filterOptions, itemName, updateFilters, showPrefsButton, doFiltersMatchPreferences, allFiltersSet } = this.props
    return (
      <div class="compact-box-filter">
        <button class="tertiary-heading chevron-right-button open-main-menu-button" onClick={disabled ? undefined : this.toggleMainMenu}>Filter by</button>
        <div class={`main-menu ${isOpen ? 'open' : 'closed'}`}>
          <PageFrame classname="main-menu-navigation">
            <button class="square-button white-white close-button" onClick={this.toggleMainMenu}>Close</button>
          </PageFrame>
          {showPrefsButton &&
          <PageFrame>
            <h2 class="tertiary-heading main-menu-heading">Filter By:</h2>
            <ToggleSwitch
              className="option-menu-item"
              colour="red"
              getValue={() => doFiltersMatchPreferences}
              setValue={()=> this.resetAndClose()}
              disabled={doFiltersMatchPreferences}
            >
              My Preferences
            </ToggleSwitch>
          </PageFrame>}
          <ul class="main-menu-list">
            {filterOptions.map(filter => {
              switch (filter.type) {
                case 'searchbox' :
                  return <SearchboxItem
                    key={filter.name}
                    filter={filter}
                    updateFilters={updateFilters}
                    activeFilters={activeFilters}
                  />
                case 'toggle':
                  return <ToggleItem
                    key={filter.name}
                    filter={filter}
                    updateFilters={updateFilters}
                    activeFilters={activeFilters}/>
                case 'checkboxes':
                  return <SubMenuItem
                    key={filter.name}
                    filter={filter}
                    activeFilters={activeFilters}
                    setFilterOptions={this.setFilterOptions}
                    updateFilters={updateFilters}
                    openFilter={openFilter}
                    toggleMainMenu={this.toggleMainMenu}
                  />
              }
            })}
          </ul>
          <PageFrame>
            <button class={`square-button transparent-grey remove-filters-button ${allFiltersSet ? 'disabled' : ''}`} onClick={this.selectAllFiltersAndClose}>
              Show all {itemName}
            </button>
          </PageFrame>
        </div>
      </div>
    )
  }
}
