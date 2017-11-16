import React from 'react'
import PropTypes from 'prop-types'
import styles from './Filters.css'

const Filters = () => (
  <div className={styles.filters}>
    <span className={styles.filterLinks}>
      <a>All</a>
      <a>Important</a>
      <a>Important</a>
      <a>Very important</a>
    </span>
    <span className={styles.search}>Search</span>
  </div>
)

Filters.propTypes = {}

export default Filters
