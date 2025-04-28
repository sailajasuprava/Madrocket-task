import PokemonCard from "./PokemonCard";

function PokemonList({ pokemons }) {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-4 gap-10">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
