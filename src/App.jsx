import { useState } from "react";
import "./App.css";
import Controls from "./components/Controls";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";

import useMovies from "./hooks/useMovies";

function App() {
  const {
    movies,
    genres,
    loading,
    selectedMovie,
    loadMovies,
    openMovie,
    closeMovie,
  } = useMovies();

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className="container">
      <header>
        <h1>🎬 Movie Explorer</h1>
      </header>

      <Controls
        genres={genres}
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        year={year}
        setYear={setYear}
        onSearch={() =>
          loadMovies({ query: search, genre, year })
        }
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <MovieGrid
          movies={movies}
          onOpen={openMovie}
        />
      )}

      <MovieModal
        movie={selectedMovie}
        onClose={closeMovie}
      />
    </div>
  );
}

export default App;