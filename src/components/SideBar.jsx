import { useFilter } from "../context/FilterContext";
import { useSearch } from "../context/SearchContext";
import { useSort } from "../context/SortContext";

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

function SideBar() {
  const { query, setQuery } = useSearch();
  const { filter, setFilter } = useFilter();
  const { sortBy, setSortBy } = useSort();

  return (
    <div className="p-4 flex flex-col gap-10 items-center">
      <input
        type="text"
        placeholder="Search Pokémon by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-2 border-stone-700 px-4 py-2 w-60 rounded-md focus:outline-none"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {typesList.map((type) => (
          <label key={type} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={type}
              checked={filter.includes(type)}
              onChange={(e) => {
                const { value, checked } = e.target;
                setFilter((prevFilters) =>
                  checked
                    ? [...prevFilters, value]
                    : prevFilters.filter((t) => t !== value)
                );
              }}
            />
            {type}
          </label>
        ))}
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

export default SideBar;
