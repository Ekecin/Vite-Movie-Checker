import { IMAGE_BASE_URL } from "../services/tmdb";

function MovieCard({ movie, onClick }) {
  const poster = movie.poster_path
    ? IMAGE_BASE_URL + movie.poster_path
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div className="card" onClick={() => onClick(movie.id)}>
      <img src={poster} alt={movie.title} />

      <div className="card-body">
        <div className="card-title">
          {movie.title}
        </div>

        <div className="card-meta">
          <span>
            {movie.release_date?.split("-")[0] || "N/A"}
          </span>

          <span className="rating">
            ★ {movie.vote_average?.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;