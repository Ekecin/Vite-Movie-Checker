function Controls({
  genres,
  search,
  setSearch,
  genre,
  setGenre,
  year,
  setYear,
  onSearch,
}) {
  return (
    <div className="controls">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movies..."
      />

      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">All Genres</option>

        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
      />

      <button onClick={onSearch}>
        Filter / Search
      </button>
    </div>
  );
}

export default Controls;