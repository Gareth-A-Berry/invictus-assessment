import {
  GET_ARTISTS_ERROR,
  GET_ARTISTS_STARTED,
  GET_ARTISTS_SUCCESS,
  RESET_ARTISTS,
} from './types';
import getArtistsService from '../../../services/artists';

const getArtistsStarted = () => ({
  type: GET_ARTISTS_STARTED,
});

const getArtistsError = ({ error }) => ({
  type: GET_ARTISTS_ERROR,
  error,
});

const getArtistsSuccess = ({ payload }) => ({
  type: GET_ARTISTS_SUCCESS,
  payload,
});

export const resetArtistsAction = () =>({
  type: RESET_ARTISTS,
});

export const getArtistsAction = ({ query }) => (dispatch) => {
  dispatch(getArtistsStarted());
  if (query === '') {
    dispatch(getArtistsSuccess({ payload: { data: [] } }));
  } else {
    getArtistsService({ query })
      .then((response) => {
        dispatch(getArtistsSuccess({ payload: response.data }));
      })
      .catch((error) => {
        dispatch(getArtistsError({ artistsError: error.message }));
      });
  }
};
