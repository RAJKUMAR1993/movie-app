import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  AiFillEye,
  AiFillCloseCircle,
  AiTwotoneEyeInvisible,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const MovieControl = ({ watch, type }) => {
  const {
    removeFromMovieWatchList,
    addMovieWatched,
    moveToWatchList,
    removeToWatched,
  } = useContext(GlobalContext);

  return (
    <>
      <div className="d-grid gap-2 d-md-flex">
        {type === "watchList" && (
          <>
            <button
              className="btn btn-success btn-sm rounded  p-2"
              onClick={() => {
                addMovieWatched(watch);
              }}
            >
              <AiFillEye />
            </button>
            <button
              className="btn btn-danger btn-sm rounded p-2 "
              onClick={() => {
                removeFromMovieWatchList(watch.id);
              }}
            >
              <AiFillCloseCircle className="text-bg-danger rounded" />
            </button>
          </>
        )}

        {type === "watched" && (
          <>
            <button
              className="btn btn-success btn-sm rounded  p-2"
              onClick={() => {
                moveToWatchList(watch);
              }}
            >
              <AiTwotoneEyeInvisible />
            </button>
            <button className="btn btn-danger btn-sm rounded p-2">
              <AiOutlineCloseCircle
                className="text-bg-danger rounded"
                onClick={() => {
                  removeToWatched(watch.id);
                }}
              />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default MovieControl;
