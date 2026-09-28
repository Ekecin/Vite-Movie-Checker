// import React, { useState } from "react";
// function runner(){
// const API_KEY = import.meta.env.API_KEY;
// //  Configuration
//     const BASE_URL = 'https://api.themoviedb.org/3';
//     const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

//       // UI Elements
    
//     const searchBtn ;
//     const grid;

//     const modal; 
//     const closeModal; 
//     const modalMedia ;
//     const modalImg ;
//     const trailerBtn;
//     const noTrailerNote ;


// return(
// modal
// );

// }







// function Dashboard() {
//   runner();
//   // 1. Manage form inputs with state
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedGenre, setSelectedGenre] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");

//   // 2. Manage movies, filtered list, and selected modal content
//   const [movies, setMovies] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   // Example search/filter handler
//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Execute filter logic or API call using search, selectedGenre, selectedYear
//   };

//   // Open modal for a clicked movie
//   const handleOpenModal = (movie) => {
//     setSelectedMovie(movie);
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedMovie(null);
//   };

//   const searchInput;
//     const genreSelect ;
//     const yearInput ;

//   return (
//     <>
//       <div className="container">
//         <header>
//           <h1>🎬 Movie Explorer</h1>
//         </header>

//         <form className="controls" onSubmit={handleSearch}>
//           <input
//             type="text"
//             placeholder="Search movies..."
//             value={searchInput}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <select
//   value={genreSelect}
//   onChange={(e) => setSelectedGenre(e.target.value)}
// >
//   <option value="">All Genres</option>
//   {data?.genres?.map((g) => (
//     <option key={g.id} value={g.id}>
//       {g.name}
//     </option>
//   ))}
// </select>
//           <input
//             type="number"
//             placeholder="Year (e.g. 2023)"
//             min="1900"
//             max="2030"
//             style={{ width: "120px" }}
//             value={yearInput}
//             onChange={(e) => setSelectedYear(e.target.value)}
//           />
//           <button type="submit">Filter / Search</button>
//         </form>

//         <div className="grid">
//           {movies.map((movie) => (
//             <div key={movie.id} className="movie-card" onClick={() => handleOpenModal(movie)}>
//               <img src={movie.posterUrl} alt={movie.title} />
//               <h3>{movie.title}</h3>
//             </div>
//             : ""
//           ))}
//         </div>
//       </div>

//       {/* Render Modal conditionally based on state */}
//       {isModalOpen && selectedMovie && (
//         <div className="modal">
//           <div className="modal-content">
//             <button className="close-btn" onClick={handleCloseModal}>
//               &times;
//             </button>
//             <div className="modal-media">
//               <img src={selectedMovie.posterUrl} alt={selectedMovie.title} />
//               {selectedMovie.trailerUrl && (
//                 <div className="trailer-btn">&#9658;</div>
//               )}
//             </div>
//             <div className="modal-details">
//               <h2>{selectedMovie.title}</h2>
//               {selectedMovie.tagline && (
//                 <p style={{ fontStyle: "italic", color: "var(--text-sub)", marginBottom: "0.5rem" }}>
//                   {selectedMovie.tagline}
//                 </p>
//               )}
//               <p>
//                 <strong className="rating">Rating:</strong> {selectedMovie.rating}/10
//               </p>
//               <p>
//                 <strong>Release Date:</strong> {selectedMovie.releaseDate}
//               </p>
//               <p style={{ marginTop: "1rem" }}>{selectedMovie.overview}</p>
//               {!selectedMovie.trailerUrl && (
//                 <p className="no-trailer-note">No trailer available for this title.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Dashboard;