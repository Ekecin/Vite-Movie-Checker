import MovieCard from "./MovieCard";

function MovieGrid({ movies, onOpen }) {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={onOpen}
        />
      ))}
    </div>
  );
}

export default MovieGrid;