import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './header/TableHeader';
import TableRow from './row/TableRow';

const Table = (props) => {
  const { options, album } = props;
  return (
    <div className="table">
      <TableHeader />
      {options.map((option) => (
        <TableRow key={option.title} option={option} album={album} />
      ))}
    </div>
  );
};

Table.propTypes = {
  options: PropTypes.array,
  album: PropTypes.shape({
    release_date: PropTypes.string,
  }).isRequired,
};

Table.defaultProps = {
  options: [],
};
export default Table;
