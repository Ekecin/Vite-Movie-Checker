import { useEffect, useState } from "react";

import {
  fetchGenres,
  fetchMovies,
  fetchMovieDetails,
} from "../services/tmdb";

export default function useMovies() {
  const [movies, setMovies] = useState([]);

  const [genres, setGenres] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadGenres();
    loadMovies();
  }, []);

  async function loadGenres() {
    setGenres(await fetchGenres());
  }

  async function loadMovies(filters = {}) {
    setLoading(true);

    setMovies(await fetchMovies(filters));

    setLoading(false);
  }

  async function openMovie(id) {
    const movie = await fetchMovieDetails(id);

    setSelectedMovie(movie);
  }

  function closeMovie() {
    setSelectedMovie(null);
  }

  return {
    movies,
    genres,
    loading,
    selectedMovie,
    loadMovies,
    openMovie,
    closeMovie,
  };
}