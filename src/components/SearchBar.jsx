import { useSearch } from "../context/SearchContext";

function SearchBar() {
  const { query, setQuery } = useSearch();
  return (
    <input
      type="text"
      placeholder="Search Pokémon by name..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border-2 border-stone-700 px-4 py-2 w-60 rounded-md focus:outline-none"
    />
  );
}

export default SearchBar;
