import {
  GET_ALBUMS_ERROR,
  GET_ALBUMS_STARTED,
  GET_ALBUMS_SUCCESS,
  RESET_ALBUMS,
} from './types';

const INITIAL_STATE = {
  albums: [],
  error: '',
  loading: false,
};

const albums = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET_ALBUMS:
      return { ...state, albums: [], error: '', loading: false };
    case GET_ALBUMS_STARTED:
      return {
        ...state,
        loading: true,
        errors: '',
      };
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.payload.data,
        loading: false,
        errors: '',
      };
    case GET_ALBUMS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.error,
      };
    default:
      return state;
  }
};

export default albums;
