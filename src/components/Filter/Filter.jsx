import PropTypes from 'prop-types';

export function Filter({ filter, findInList }) {
  return (
    <label>
      Find contacts by name
      <input type="filter" name="filter" value={filter} onChange={findInList} />
    </label>
  );
}
