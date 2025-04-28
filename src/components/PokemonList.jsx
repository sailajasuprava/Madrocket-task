import { useSearch } from "../context/SearchContext";
import PokemonCard from "./PokemonCard";
import Spinner from "./Spinner";

function PokemonList() {
  const { isLoading, pokemons, query, filter } = useSearch();

  if (isLoading) return <Spinner />;

  let filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filter) {
    filteredPokemons = filteredPokemons.filter((pokemon) =>
      pokemon.types.some((typeInfo) => typeInfo.type.name === filter)
    );
  }
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-4 gap-10">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
