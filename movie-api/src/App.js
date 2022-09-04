import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./Components/MovieList";
import "./App.css";
import AddMovie from "./Components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandeler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-http-5d9db-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Somthig went wrong!");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandeler();
  }, [fetchMoviesHandeler]);

  const AddMovieHandeler = async (movie) => {
    const response = await fetch(
      "https://react-http-5d9db-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <React.Fragment>
      <section className="form-container">
        <AddMovie onAddMovie={AddMovieHandeler} />
      </section>
      <section>
        <button className="btn" onClick={fetchMoviesHandeler}>
          Fetch Movies
        </button>
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
