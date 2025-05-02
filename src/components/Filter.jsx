import { useFilter } from "../context/FilterContext";

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

function Filter() {
  const { filter, setFilter } = useFilter();
  return (
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
  );
}

export default Filter;
