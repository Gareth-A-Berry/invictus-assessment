import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-graceful-image';

const AlbumCard = (props) => {
  const { album, onAlbumSelection } = props;
  return (
    <div
      className="album-card-container"
      key={album.title}
      onClick={() => onAlbumSelection({ selected: album })}
    >
      <ProgressiveImage
        src={album.cover_medium}
        placeholder={album.cover_small}
      >
        {(src) => (
          <img src={src} className="album-card-image" alt="album_cover" />
        )}
      </ProgressiveImage>

      <div className="album-card-title">{album.title}</div>
    </div>
  );
};

AlbumCard.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    cover_medium: PropTypes.string,
    cover_small: PropTypes.string,
  }).isRequired,
  onAlbumSelection: PropTypes.func.isRequired,
};

export default AlbumCard;
