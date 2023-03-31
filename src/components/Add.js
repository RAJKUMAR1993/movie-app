import React, { useState } from "react";
import ResultsCard from "./ResultsCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);
  const addMovie = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&langauge=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setResult(data.results);
          setIsLoaded(true);
        } else {
          setIsLoaded([]);
        }
      });
  };

  return (
    <>
      <div className="container py-2">
        <div className="row py-2 ">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="row ">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search movie name...."
                  value={query}
                  onChange={addMovie}
                />
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <section className="container w-50">
        <div className="row">
          {result.length > 0 && (
            <ul className="list-group list-group-flush">
              {result.map((movieList) => {
                return (
                  <>
                    <li key="{movieList.id}" className="list-group-item">
                      <ResultsCard movie={movieList} />
                    </li>
                  </>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default Add;
