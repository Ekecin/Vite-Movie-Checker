import { IMAGE_BASE_URL } from "../services/tmdb";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const { details } = movie;

  return (
    <div className="modal active">
      <div className="modal-content">
        <button onClick={onClose}>×</button>

        <img
          src={IMAGE_BASE_URL + details.poster_path}
          alt={details.title}
        />

        <div className="modal-details">
          <h2>{details.title}</h2>

          <p>{details.tagline}</p>

          <p>{details.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;