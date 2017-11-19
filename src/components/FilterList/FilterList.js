import React from 'react'
import PropTypes from 'prop-types'
import styles from './FilterList.css'
import { Link } from 'react-router-dom';
import FilterLink from '../../containers/FilterLink'
import btn from '../../util/btn.css'

const FilterList = () => (
  <div className={styles.filters}>
    <span className={styles.filterLinks}>
      <FilterLink filter="SHOW_ALL">All</FilterLink>
      <FilterLink filter="SHOW_ORDINARY">Ordinary</FilterLink>
      <FilterLink filter="SHOW_IMPORTANT">Important</FilterLink>
      <FilterLink filter="SHOW_VERY_IMPORTANT">Very important</FilterLink>
      <Link className={btn.btn} to="/add" >Add task</Link>
    </span>
  </div>
)

FilterList.propTypes = {}

export default FilterList