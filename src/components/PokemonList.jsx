import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import NoResults from "./NoResults";
import PokemonCard from "./PokemonCard";
import Spinner from "./Spinner";
import { usePokemon } from "../context/PokemonContext";
import { useFilter } from "../context/FilterContext";
import { useSort } from "../context/SortContext";

const ITEMS_PER_PAGE = 10;

function PokemonList() {
  const { isLoading, pokemons } = usePokemon();
  const { query } = useSearch();
  const { filter } = useFilter();
  const { sortBy } = useSort();
  const [page, setPage] = useState(1);

  if (isLoading) return <Spinner />;

  let filteredPokemons = pokemons;

  // SEARCH
  if (query) {
    filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // FILTER
  if (filter.length > 0) {
    filteredPokemons = filteredPokemons.filter((pokemon) =>
      filter.some((type) =>
        pokemon.types.map((t) => t.type.name).includes(type)
      )
    );
  }

  // SORT
  if (sortBy === "id") {
    filteredPokemons = filteredPokemons.sort((a, b) => a.id - b.id);
  }
  if (sortBy === "nameAsc") {
    filteredPokemons = filteredPokemons.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }
  if (sortBy === "nameDesc") {
    filteredPokemons = filteredPokemons.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  // PAGINATION
  const totalPages = Math.ceil(filteredPokemons.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = page * ITEMS_PER_PAGE;

  const handlePageChange = (direction) => {
    if (direction === "next" && page < totalPages) {
      setPage((prev) => prev + 1);
    } else if (direction === "prev" && page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (filteredPokemons.length === 0) return <NoResults />;

  return (
    <div className="flex-1 px-12">
      {/* pokemon listings */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredPokemons.slice(start, end).map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center gap-4">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page <strong>{page}</strong> of <strong>{totalPages}</strong>
        </span>
        <button
          onClick={() => handlePageChange("next")}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
