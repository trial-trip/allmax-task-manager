import React from 'react'
import PropTypes from 'prop-types'
import styles from './Filters.css'
import FilterLink from '../containers/FilterLink'

const FilterList = () => (
  <div className={styles.filters}>
    <span className={styles.filterLinks}>
      <FilterLink filter="SHOW_ALL">All</FilterLink>
      <FilterLink filter="SHOW_ORDINARY">Ordinary</FilterLink>
      <FilterLink filter="SHOW_IMPORTANT">Important</FilterLink>
      <FilterLink filter="SHOW_VERY_IMPORTANT">Very important</FilterLink>
    </span>
  </div>
)

FilterList.propTypes = {}

export default FilterList