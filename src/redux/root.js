import { combineReducers } from 'redux';
import artists from './modules/artist/reducers';
import albums from './modules/albums/reducers';
import tracks from './modules/tracks/reducers';

export default combineReducers({
  artists,
  albums,
  tracks,
});
