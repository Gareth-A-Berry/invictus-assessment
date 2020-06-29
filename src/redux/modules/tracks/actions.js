import {
  GET_TRACKS_ERROR,
  GET_TRACKS_STARTED,
  GET_TRACKS_SUCCESS,
  RESET_TRACKS,
} from './types';
import getTracksService from '../../../services/tracks';

const getTracksStarted = () => ({
  type: GET_TRACKS_STARTED,
});

const getTracksError = ({ error }) => ({
  type: GET_TRACKS_ERROR,
  error,
});

const getTracksSuccess = ({ payload }) => ({
  type: GET_TRACKS_SUCCESS,
  payload,
});

export const resetTracksAction = () => ({
  type: RESET_TRACKS,
});

export const getTracksAction = ({ id }) => (dispatch) => {
  dispatch(getTracksStarted());
  if (id === '') {
    dispatch(getTracksSuccess({ payload: { data: [] } }));
  } else {
    getTracksService({ id })
      .then((response) => {
        dispatch(getTracksSuccess({ payload: response.data }));
      })
      .catch((error) => {
        dispatch(getTracksError({ artistsError: error.message }));
      });
  }
};
