import { connect } from 'react-redux';
import { setPriorityFilter } from '../actions';
import { Link } from '../components/Link/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.priorityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setPriorityFilter(ownProps.filter));
    }
  };
};

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
