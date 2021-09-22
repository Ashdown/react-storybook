import React from 'react'
import classnames from 'classnames'
import pipe from 'lodash/fp/pipe'
import pickBy from 'lodash/fp/pickBy'
import keys from 'lodash/fp/keys'
import PropTypes from 'prop-types'
import { CompactBoxFilter, HorizontalBoxFilter } from './'
import filter from 'lodash/fp/filter'
import mapValues from 'lodash/fp/mapValues'
import values from 'lodash/fp/values'
import sum from 'lodash/fp/sum'
import find from 'lodash/fp/find'
import MediaQuery from 'react-responsive'

const EXAMPLE_CHECKBOX_FILTER = {
  label: 'Filter',
  value: 'filter-value',
}

const FOUR_CHECKBOXES = new Array(4).fill().map((e, i) => ({ label: `${EXAMPLE_CHECKBOX_FILTER.label} ${i}`, value: `${EXAMPLE_CHECKBOX_FILTER.label}-${i}` }))
const FIFTEEN_CHECKBOXES = new Array(15).fill().map((e, i) => ({ label: `${EXAMPLE_CHECKBOX_FILTER.label} ${i}`, value: `${EXAMPLE_CHECKBOX_FILTER.label}-${i}` }))


const DEFAULT_FILTER_OPTIONS = [
  { label: 'Search...', name: 'search', type: 'searchbox' },
  { label: 'Toggle', name: 'toggle-option', type: 'toggle' },
  { label: 'Few Boxes', name: 'first-option', type: 'checkboxes', options: FOUR_CHECKBOXES },
  { label: 'Many Boxes', name: 'second-option', type: 'checkboxes', options: FIFTEEN_CHECKBOXES },
]

export default class BoxFilter extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    preferenceFilters: PropTypes.object,
    updateFilters: PropTypes.func.isRequired,
    doFiltersMatchPreferences: PropTypes.bool,
    filterOptions: PropTypes.array,
    showPrefsButton: PropTypes.bool,
    itemName: PropTypes.string,
    initialFilters: PropTypes.object,
  }

  static defaultProps = {
    disabled: false,
    filterOptions: DEFAULT_FILTER_OPTIONS,
    showPrefsButton: false,
    itemName: 'boxes',
    doFiltersMatchPreferences: false,
    initialFilters: {},
  }

  state = {
    isOpen: false,
    openFilter: null,
    activeFilters: { ...this.props.initialFilters },
    filterScreenText: '',
  }

  updateFilters = filterType => data => {
    const activeFilters = { ...this.state.activeFilters }
    const firstKey = keys(data)[0]
    switch (filterType) {
      case 'searchbox':
      case 'toggle' :
        activeFilters[firstKey] = data[firstKey]
        break
      default:
        //checkbox list
        activeFilters[filterType] = pipe(pickBy(value => value), keys)(data)
    }
    this.setState({ activeFilters })
    this.props.updateFilters(activeFilters)
  }

  selectAllFilters = () => {
    this.setState({ activeFilters: {} })
    this.props.updateFilters({})
  }

  filterByPreferences = () => {
    const { preferenceFilters } = this.props
    this.setState({ activeFilters: preferenceFilters })
    this.props.updateFilters(preferenceFilters)
  }

  areAllFiltersSet(filterOptions, activeFilters) {
    const mapFilterCount = filterOption => {
      switch (filterOption.type) {
        case 'toggle':
          return 1
        case 'checkboxes':
          return filterOption.options.length
        default:
          return 0
      }
    }

    const totalFilterCount = pipe(
      filter(filterOption => filterOption.type !== 'searchbox'),
      mapValues(mapFilterCount),
      values,
      sum
    )(filterOptions)

    const totalActiveFilterCount = pipe(
      pickBy((value, key) => key !== 'search'),
      mapValues(filter => Array.isArray(filter) ? filter.length : (filter ? 1 : 0)),
      values,
      sum
    )(activeFilters)

    const allFiltersActive = (totalActiveFilterCount === totalFilterCount)
    const noFiltersActive = totalActiveFilterCount === 0

    const isSearching = find(option => option.type === 'searchbox')(filterOptions) && !!activeFilters.search

    return (allFiltersActive || noFiltersActive) && !isSearching

  }

  render() {
    const { activeFilters } = this.state
    const {
      disabled,
      doFiltersMatchPreferences,
      filterOptions,
      showPrefsButton,
      itemName,
    } = this.props

    return (
      <div className={classnames('box-filter', { translucent: disabled })}>
        <MediaQuery query="(max-width: 1023px)">
          <CompactBoxFilter
            filterOptions={filterOptions}
            updateFilters={this.updateFilters}
            activeFilters={activeFilters}
            resetFilters={this.filterByPreferences}
            selectAllFilters={this.selectAllFilters}
            doFiltersMatchPreferences={doFiltersMatchPreferences}
            showPrefsButton={showPrefsButton}
            itemName={itemName}
            disabled={disabled}
            allFiltersSet={this.areAllFiltersSet(filterOptions, activeFilters)}
          />
        </MediaQuery>
        <MediaQuery query="(min-width: 1024px)">
          <HorizontalBoxFilter
            filterOptions={filterOptions}
            updateFilters={this.updateFilters}
            activeFilters={activeFilters}
            resetFilters={this.filterByPreferences}
            selectAllFilters={this.selectAllFilters}
            doFiltersMatchPreferences={doFiltersMatchPreferences}
            showPrefsButton={showPrefsButton}
            itemName={itemName}
            disabled={disabled}
            allFiltersSet={this.areAllFiltersSet(filterOptions, activeFilters)}
          />
        </MediaQuery>
      </div>
    )
  }
}
