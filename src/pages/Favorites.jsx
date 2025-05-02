import PokemonCard from "../components/PokemonCard";
import { useSearch } from "../context/SearchContext";

function Favorites() {
  const { pokemons, favorites } = useSearch();

  if (favorites.length === 0) return;

  const favoritesDetails = pokemons.filter((item) =>
    favorites.includes(item.id)
  );

  return (
    <div className="max-w-5xl mx-auto px-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
      {favoritesDetails.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Favorites;
