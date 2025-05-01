import { useSearch } from "../context/SearchContext";

const typesList = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

function SearchBar() {
  const { query, setQuery, filter, setFilter, sortBy, setSortBy } = useSearch();
  return (
    <div className="w-screen p-4 flex flex-col sm:flex-row gap-10 items-center">
      <input
        type="text"
        placeholder="Search Pokémon by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-2 border-stone-700 px-4 py-2 w-72 rounded-md focus:outline-none"
      />

      <div>
        <select
          name="category"
          required
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border-2 border-stone-700 px-4 py-2 rounded-md focus:outline-none"
        >
          <option value="">Select category</option>
          {typesList.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          name="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border-2 border-stone-700 px-4 py-2 rounded-md focus:outline-none"
        >
          <option value="">Sort by... </option>
          <option value="id">ID</option>
          <option value="nameAsc">Name (A-Z)</option>
          <option value="nameDesc">Name (Z-A)</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
