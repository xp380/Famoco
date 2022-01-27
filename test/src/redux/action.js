import { START_MOVIES, SUCCESS_MOVIES, ERROR_MOVIES, NEW_NOTE } from "./types";

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

export const addNewNote = (note) => ({
  type: NEW_NOTE,
  payload: note,
});
