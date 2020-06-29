import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  AlbumInformationCard,
  Carousel,
  Divider,
  Search,
} from '../../components';
import {
  getArtistsAction,
  resetArtistsAction,
} from '../../redux/modules/artist/actions';
import {
  getAlbumsAction,
  resetAlbumsAction,
} from '../../redux/modules/albums/actions';
import {
  getTracksAction,
  resetTracksAction,
} from '../../redux/modules/tracks/actions';

const Home = (props) => {
  const {
    getArtists,
    artistsLoading,
    artists,
    artistsError,
    getAlbums,
    albumsLoading,
    albums,
    tracksLoading,
    tracks,
    getTracks,
    resetTracks,
    resetAlbums,
    resetArtists,
  } = props;

  const [query, handleQueryChange] = useState('');
  const [artist, handleArtistChange] = useState(null);
  const [album, handleAlbumChange] = useState(null);
  const [isArtistSelected, handleSelected] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getArtists({ query });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleOnFocus = () => {
    handleQueryChange('');
    handleSelected(false);
    resetTracks();
    resetAlbums();
    resetArtists();
    handleArtistChange(null);
    handleAlbumChange(null);
  };

  const handleArtistSelection = ({ selected }) => {
    if (selected && selected.name && selected.id) {
      handleSelected(true);
      handleQueryChange(selected.name);
      handleArtistChange(selected);
      getAlbums({ id: selected.id });
    }
  };

  const handleAlbumSelection = ({ selected }) => {
    handleAlbumChange(selected);
    getTracks({ id: selected.id });
  };

  return (
    <>
      <Search
        onSearch={handleQueryChange}
        onSelection={handleArtistSelection}
        onFocus={handleOnFocus}
        query={query}
        results={artists}
        loading={artistsLoading}
        error={artistsError}
        isSelected={isArtistSelected}
      />
      {albumsLoading && (
        <div className="home-loader-container">
          <div className="loader" />
        </div>
      )}
      {artist && !albumsLoading && (
        <div className="home-carousel-container">
          <h1 className="heading-primary">{`Search result for ${artist.name}`}</h1>
          <Divider />
          <Carousel options={albums} onSelection={handleAlbumSelection} />
        </div>
      )}
      {tracksLoading && (
        <div className="home-loader-container">
          <div className="loader" />
        </div>
      )}
      {album && tracks && !tracksLoading && (
        <AlbumInformationCard album={album} tracks={tracks} />
      )}
    </>
  );
};

Home.propTypes = {
  getArtists: PropTypes.func.isRequired,
  getAlbums: PropTypes.func.isRequired,
  getTracks: PropTypes.func.isRequired,
  resetArtists: PropTypes.func.isRequired,
  resetAlbums: PropTypes.func.isRequired,
  resetTracks: PropTypes.func.isRequired,

  artistsLoading: PropTypes.bool,
  artists: PropTypes.array,
  artistsError: PropTypes.string,

  albumsLoading: PropTypes.bool,
  albums: PropTypes.array,
  albumsError: PropTypes.string,

  tracksLoading: PropTypes.bool,
  tracks: PropTypes.array,
  tracksError: PropTypes.string,
};

Home.defaultProps = {
  artistsError: '',
  artistsLoading: false,
  artists: [],

  albumsError: '',
  albumsLoading: false,
  albums: [],

  tracksError: '',
  tracksLoading: false,
  tracks: [],
};

const mapStateToProps = (state) => ({
  tracksLoading: state.tracks.loading,
  tracksError: state.tracks.error,
  tracks: state.tracks.tracks,

  artistsLoading: state.artists.loading,
  artistsError: state.artists.error,
  artists: state.artists.artists,

  albumsLoading: state.albums.loading,
  albumsError: state.albums.error,
  albums: state.albums.albums,
});

const mapDispatchToProps = (dispatch) => ({
  getArtists: ({ query }) => dispatch(getArtistsAction({ query })),
  getAlbums: ({ id }) => dispatch(getAlbumsAction({ id })),
  getTracks: ({ id }) => dispatch(getTracksAction({ id })),
  resetArtists: () => dispatch(resetArtistsAction()),
  resetAlbums: () => dispatch(resetAlbumsAction()),
  resetTracks: () => dispatch(resetTracksAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
