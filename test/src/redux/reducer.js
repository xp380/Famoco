import {
  START_MOVIES,
  SUCCESS_MOVIES,
  ERROR_MOVIES,
  ADD_FAVORITE_MOVIES,
  REMOVE_FAVORITE_MOVIES,
  NEW_NOTE,
} from "./types";

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
    case ADD_FAVORITE_MOVIES:
      return {
        ...state,
        movies_liked: [action.payload, ...state.movies_liked],
      };
    case REMOVE_FAVORITE_MOVIES:
      const filterFavorite = state.movies_liked.filter(
        (data) => data.id !== action.payload
      );
      return {
        ...state,
        movies_liked: filterFavorite,
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
