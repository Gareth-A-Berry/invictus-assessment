import {
  GET_TRACKS_ERROR,
  GET_TRACKS_STARTED,
  GET_TRACKS_SUCCESS,
  RESET_TRACKS,
} from './types';

const INITIAL_STATE = {
  tracks: [],
  error: '',
  loading: false,
};

const tracks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET_TRACKS:
      return {
        ...state,
        tracks: [],
        error: '',
        loading: false,
      };
    case GET_TRACKS_STARTED:
      return {
        ...state,
        loading: true,
        errors: '',
      };
    case GET_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: action.payload.data,
        loading: false,
        errors: '',
      };
    case GET_TRACKS_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.error,
      };
    default:
      return state;
  }
};

export default tracks;
