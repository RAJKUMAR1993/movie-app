import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  console.log(watched, "test");
  return (
    <>
      <div className="wrapper">
        {watched.length > 0 ? (
          watched.map((watch, index) => {
            return (
              <>
                <MovieCard watch={watch} type={"watched"} key={index} />
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

export default Watched;
