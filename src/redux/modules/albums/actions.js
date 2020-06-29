import {
  GET_ALBUMS_ERROR,
  GET_ALBUMS_STARTED,
  GET_ALBUMS_SUCCESS,
  RESET_ALBUMS,
} from './types';
import getAlbumsService from '../../../services/albums';

const getAlbumsStarted = () => ({
  type: GET_ALBUMS_STARTED,
});

const getAlbumsError = ({ error }) => ({
  type: GET_ALBUMS_ERROR,
  error,
});

const getAlbumsSuccess = ({ payload }) => ({
  type: GET_ALBUMS_SUCCESS,
  payload,
});

export const resetAlbumsAction = () => ({
  type: RESET_ALBUMS,
});

export const getAlbumsAction = ({ id }) => (dispatch) => {
  dispatch(getAlbumsStarted());
  if (id === '') {
    dispatch(getAlbumsSuccess({ payload: { data: [] } }));
  } else {
    getAlbumsService({ id })
      .then((response) => {
        dispatch(getAlbumsSuccess({ payload: response.data }));
      })
      .catch((error) => {
        dispatch(getAlbumsError({ artistsError: error.message }));
      });
  }
};
