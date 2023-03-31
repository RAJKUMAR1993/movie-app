export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_MOVIE_WATCH_LIST":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case "REMOVE_MOVIE_WATCH_LIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (MovieList) => MovieList.id !== action.payload
        ),
      };

    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchList: state.watchList.filter(
          (MovieList) => MovieList.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };

    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (MovieList) => MovieList.id !== action.payload.id
        ),
        watchList: [action.payload, ...state.watched],
      };
    case "REMOVE_TO_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(
          (MovieList) => MovieList.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
