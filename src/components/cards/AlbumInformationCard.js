import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-graceful-image';
import Table from '../table/Table';

const AlbumInformationCard = (props) => {
  const { album, tracks } = props;
  console.log('album', album);
  return (
    <div className="album-information-card-container">
      <ProgressiveImage
        src={album.cover_medium}
        placeholder={album.cover_small}
      >
        {(src) => (
          <img src={src} className="album-card-image" alt="album_cover" />
        )}
      </ProgressiveImage>
      <div className="album-information-card-table">
        <h2 className="heading-secondary">{album.title}</h2>
        <Table options={tracks} album={album} />
      </div>
    </div>
  );
};

AlbumInformationCard.propTypes = {
  tracks: PropTypes.array,
  album: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    cover_medium: PropTypes.string,
    cover_small: PropTypes.string,
  }).isRequired,
};

AlbumInformationCard.defaultProps = {
  tracks: [],
};

export default AlbumInformationCard;
