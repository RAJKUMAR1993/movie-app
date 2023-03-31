import React, { useContext } from "react";
import "../components/resultcard.css";
import { GlobalContext } from "../context/GlobalState";

const ResultsCard = ({ movie }) => {
  const { addToMovieWatchList, addMovieWatched, watchList, watched } =
    useContext(GlobalContext);

  const storeMovie = watchList.find((stored, index) => stored.id === movie.id);
  const watchedStoreMovie = watched.find(
    (stored, index) => stored.id === movie.id
  );

  // if storeMovie movie disable or onable button
  const storeMovieDisable = storeMovie
    ? true
    : watchedStoreMovie
    ? true
    : false;
  const storeMovieWatchedDisable = watchedStoreMovie ? true : false;
  return (
    <>
      <div className="row">
        <figure className="movie">
          <div className="movie__hero">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="movie__img"
              />
            ) : (
              <p>no image</p>
            )}
          </div>
          <div className="movie__content">
            <div className="movie__title">
              <p className="heading__primary  h5 text-bold text-info">
                First Blood Part II <i className="fas fa-fire"></i>
              </p>
              <div className="movie__tag movie__tag--1">#action</div>
              <div className="movie__tag movie__tag--2">#thriller</div>
            </div>
            <p className="movie__description h5 text-bold text-info">
              {movie.title}
            </p>
            <div className="movie__details d-flex justify-content-between">
              <p className="movie__detail">
                <span className="icons icons-red">
                  <i className="fas fa-camera-retro"></i>
                </span>
                {movie.release_date ? movie.release_date.substring(0, 4) : ""}
              </p>

              <p className="movie__detail d-flex justify-content-between">
                <span className="icons icons-grey">
                  <i className="fas fa-clock"></i>{" "}
                </span>
                1h 33m
              </p>
              <p className="movie__detail">
                <span className="icons icons-yellow">
                  <i className="fas fa-file-invoice-dollar"></i>
                </span>
                $12.52 crores
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-success btn-sm badge badge-success"
                disabled={storeMovieDisable}
                onClick={() => {
                  addToMovieWatchList(movie);
                }}
              >
                Add To WatchList
              </button>
              <button
                className="btn btn-info btn-sm badge badge-info"
                disabled={storeMovieWatchedDisable}
                onClick={() => {
                  addMovieWatched(movie);
                }}
              >
                Add To Watched
              </button>
            </div>
          </div>
          <div className="movie__price">$12.56</div>
        </figure>
      </div>
    </>
  );
};

export default ResultsCard;
