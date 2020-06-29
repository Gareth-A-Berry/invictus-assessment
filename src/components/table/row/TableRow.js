import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const { option, album } = props;

  const handleDuration = () => {
    const { duration } = option;
    const m = Math.floor((duration % 3600) / 60);
    let s = Math.floor((duration % 3600) % 60);

    if (s < 10) {
      s = `0${s}`;
    }

    return `${m}:${s}`;
  };

  const releaseYear = album.release_date.substring(0, 4);

  return (
    <div className="table-row">
      <div className="table-cell--one">{option.track_position}</div>
      <div className="table-cell--n">{option.title}</div>
      <div className="table-cell--n">{option.artist.name}</div>
      <div className="table-cell--n">{handleDuration()}</div>
      <div className="table-cell--n">{releaseYear}</div>
    </div>
  );
};

TableRow.propTypes = {
  option: PropTypes.shape({
    track_position: PropTypes.number,
    title: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
    duration: PropTypes.number,
  }).isRequired,
  album: PropTypes.shape({
    release_date: PropTypes.string,
  }).isRequired,
};

export default TableRow;
