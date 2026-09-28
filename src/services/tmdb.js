const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export async function fetchGenres() {
  const res = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );

  const data = await res.json();

  return data.genres || [];
}

export async function fetchMovies({
  query = "",
  genre = "",
  year = "",
}) {
  let endpoint;

  if (query) {
    endpoint = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`;

    if (year) endpoint += `&primary_release_year=${year}`;
  } else {
    endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

    if (genre) endpoint += `&with_genres=${genre}`;
    if (year) endpoint += `&primary_release_year=${year}`;
  }

  const res = await fetch(endpoint);

  const data = await res.json();

  return data.results || [];
}

export async function fetchMovieDetails(id) {
  const [detailsRes, videosRes] = await Promise.all([
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`),
    fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`),
  ]);

  return {
    details: await detailsRes.json(),
    videos: await videosRes.json(),
  };
}