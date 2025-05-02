import { useSort } from "../context/SortContext";

function SortBy() {
  const { sortBy, setSortBy } = useSort();
  return (
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
  );
}

export default SortBy;
