import { useState } from "react";
import { IMAGE_BASE_URL } from "../services/tmdb";

// Prefer an official YouTube trailer, then any trailer, then a teaser.
function getTrailer(videos) {
  const youtube = (videos?.results || []).filter((v) => v.site === "YouTube");

  return (
    youtube.find((v) => v.type === "Trailer" && v.official) ||
    youtube.find((v) => v.type === "Trailer") ||
    youtube.find((v) => v.type === "Teaser") ||
    null
  );
}

// Separate component so the "playing" state resets whenever the modal
// closes or a different movie is opened.
function ModalBody({ movie, onClose }) {
  const { details, videos } = movie;
  const [playing, setPlaying] = useState(false);
  const trailer = getTrailer(videos);

  return (
    <div className="modal active">
      <div className={`modal-content${playing ? " playing" : ""}`}>
        <button onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modal-media">
          {playing && trailer ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&rel=0`}
              title={`${details.title} trailer`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <>
              {details.poster_path && (
                <img
                  src={IMAGE_BASE_URL + details.poster_path}
                  alt={details.title}
                />
              )}

              {trailer && (
                <button
                  className="trailer-btn"
                  onClick={() => setPlaying(true)}
                  aria-label={`Play trailer for ${details.title}`}
                >
                  ▶
                </button>
              )}
            </>
          )}
        </div>

        <div className="modal-details">
          <h2>{details.title}</h2>

          {details.tagline && (
            <p className="modal-tagline">{details.tagline}</p>
          )}

          <p className="modal-overview">{details.overview}</p>

          {!trailer && (
            <p className="no-trailer-note">
              No trailer available for this movie.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <ModalBody
      key={movie.details.id}
      movie={movie}
      onClose={onClose}
    />
  );
}

export default MovieModal;
