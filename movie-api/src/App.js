import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./Components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandeler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Somthig went wrong!");
      }
      const data = await response.json();

      const transformMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandeler();
  }, [fetchMoviesHandeler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandeler}>Fetch Movies</button>
      </section>
      <section className="movie-container">
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && (
          <p>Found not movies </p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
