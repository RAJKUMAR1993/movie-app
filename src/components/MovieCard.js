import React from "react";
import MovieControl from "../components/MovieControl";

const MovieCard = ({ watch, type }) => {
  return (
    <>
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <h1>{watch.title}</h1>
            <div className="card_cat">
              <p className="btn btn-dark btn-sm">PG - 13</p>
              <p className="year">{watch.release_date}</p>
              <p className="genre">Action | Adventure </p>
              <p className="time">2h 28m</p>
            </div>
            <p className="disc   text-truncate" style={{ maxWidth: " 150px" }}>
              {watch.overview}
            </p>

            <div className="py-2 social-btn d-flex justify-content-between">
              <button className="btn btn-dark btn-sm">
                <i className="fas fa-play text-warning"></i> SEE TRAILER
              </button>
              <button className="btn btn-dark btn-sm">
                <i className="fas fa-download text-primary"></i> DOWNLOAD
              </button>
              <button className="btn btn-dark btn-sm">
                <i className="fas fa-thumbs-up text-info m-1"></i>
                {Math.ceil(watch.vote_count)}
              </button>
              <MovieControl watch={watch} type={type} />
            </div>
          </div>
        </div>
        <div className="card_right">
          <div className="img_container">
            {watch.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${watch.poster_path}`}
                alt={watch.title}
                className="movie__img"
              />
            ) : (
              <p>no image</p>
            )}
          </div>
          <div className="play_btn">
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              <i className="fa-solid fa-play fa-2x text-info"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
