import {
  START_MOVIES,
  SUCCESS_MOVIES,
  ERROR_MOVIES,
  ADD_FAVORITE_MOVIES,
  REMOVE_FAVORITE_MOVIES,
  NEW_NOTE,
} from "./types";

export const startMovie = () => ({
  type: START_MOVIES,
});

export const successMovie = (allMovies) => ({
  type: SUCCESS_MOVIES,
  payload: allMovies,
});

export const errorMovie = (error) => ({
  type: ERROR_MOVIES,
  payload: error,
});

export const addFavoriteMovie = (movieInformation) => ({
  type: ADD_FAVORITE_MOVIES,
  payload: movieInformation,
});

export const removeFavoriteMovies = (id) => ({
  type: REMOVE_FAVORITE_MOVIES,
  payload: id,
});

export const addNewNote = (note) => ({
  type: NEW_NOTE,
  payload: note,
});
