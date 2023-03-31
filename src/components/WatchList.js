/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";
import "../components/watchlist.css";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);
  // console.log(watchList, "watchList");
  return (
    <>
      <div className="wrapper">
        {watchList.length > 0 ? (
          watchList.map((watch, index) => {
            return (
              <>
                <MovieCard watch={watch} type={"watchList"} />
              </>
            );
          })
        ) : (
          <h4 className="text-danger text-bold">No Data...</h4>
        )}
      </div>
    </>
  );
};

export default WatchList;
