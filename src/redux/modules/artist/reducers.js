import {
  GET_ARTISTS_ERROR,
  GET_ARTISTS_STARTED,
  GET_ARTISTS_SUCCESS,
  RESET_ARTISTS,
} from './types';

const INITIAL_STATE = {
  artists: [],
  error: '',
  loading: false,
};

const artists = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET_ARTISTS:
      return {
        ...state,
        artists: [],
        error: '',
        loading: false,
      };
    case GET_ARTISTS_STARTED:
      return {
        ...state,
        loading: true,
        errors: '',
      };
    case GET_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: action.payload.data,
        loading: false,
        errors: '',
      };
    case GET_ARTISTS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.error,
      };
    default:
      return state;
  }
};

export default artists;
