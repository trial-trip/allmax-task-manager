import * as React from 'react';
import { Link } from 'react-router-dom';
import { FilterLink } from '../../containers/FilterLink';
import '../../util/btn.css';
import './FilterList.css';

const FilterList = () => (
  <div className="filters">
    <span className="filter-links">
      <FilterLink filter="SHOW_ALL">All</FilterLink>
      <FilterLink filter="SHOW_ORDINARY">Ordinary</FilterLink>
      <FilterLink filter="SHOW_IMPORTANT">Important</FilterLink>
      <FilterLink filter="SHOW_VERY_IMPORTANT">Very important</FilterLink>
      <Link className="btn" to="/add">
        Add task
      </Link>
    </span>
  </div>
);

FilterList.propTypes = {};

export default FilterList;
