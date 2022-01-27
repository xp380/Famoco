import { START_MOVIES, SUCCESS_MOVIES, ERROR_MOVIES, NEW_NOTE } from "./types";

const initialState = {
  all_movies: [],
  loading: false,
  movies_liked: [],
  note: [],
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_MOVIES:
      return {
        ...state,
        loading: false,
        all_movies: action.payload,
      };
    case ERROR_MOVIES:
      return {
        ...state,
        loading: false,
      };
    case NEW_NOTE:
      return {
        ...state,
        all_movies: [action.payload, ...state.note],
      };
    default:
      return {
        ...state,
      };
  }
};

export default MovieReducer;
