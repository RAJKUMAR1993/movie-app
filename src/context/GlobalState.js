import { createContext, useEffect, useReducer } from "react";
import { appReducer } from "./AppReducer";

// initial state

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//create context

export const GlobalContext = createContext(initialState);

//provider components
// fun .

export const GlobalProvider = (props) => {
  const [test, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(test.watchList));
    localStorage.setItem("watched", JSON.stringify(test.watched));
  }, [test]);

  //action
  const addToMovieWatchList = (movie) => {
    dispatch({ type: "ADD_TO_MOVIE_WATCH_LIST", payload: movie });
  };
  // remove fromMovieWatchList
  const removeFromMovieWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_WATCH_LIST", payload: id });
  };
  // add to watched
  const addMovieWatched = (watch) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: watch });
  };

  // move towatchList
  const moveToWatchList = (watch) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: watch });
  };

  //remove from movieWatched
  const removeToWatched = (id) => {
    dispatch({ type: "REMOVE_TO_WATCHED", payload: id });
  };
  return (
    <GlobalContext.Provider
      value={{
        watchList: test.watchList,
        watched: test.watched,
        addToMovieWatchList,
        removeFromMovieWatchList,
        addMovieWatched,
        moveToWatchList,
        removeToWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
