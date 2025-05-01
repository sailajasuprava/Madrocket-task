import { useParams } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import Spinner from "../components/Spinner";

function PokemonDetails() {
  const { pokemonName } = useParams();

  const { pokemons } = useSearch();
  const pokemon = pokemons.filter((item) => item.name === pokemonName)[0];

  if (!pokemon) return <Spinner />;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-4">{pokemon.name}</h1>
      <img
        src={pokemon.sprites.back_default}
        alt={pokemon.name}
        className="w-32 h-32 mb-4"
      />
      <p>ID: {pokemon.id}</p>
      <div>
        <h2 className="font-semibold mt-4">Stats</h2>
        <ul>
          {pokemon.stats.map((s) => (
            <li key={s.stat.name}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-semibold mt-4">Abilities</h2>
        <ul>
          {pokemon.abilities.map((a) => (
            <li key={a.ability.name}>{a.ability.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default PokemonDetails;
