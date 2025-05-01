import { useParams } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import Spinner from "../components/Spinner";

function PokemonDetails() {
  const { pokemonName } = useParams();

  const { pokemons } = useSearch();
  const pokemon = pokemons.filter((item) => item.name === pokemonName)[0];

  if (!pokemon) return <Spinner />;

  return (
    <main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Image and name */}
      <h1 className="text-4xl text-center font-bold capitalize mt-4">
        {pokemon.name}{" "}
        <span className="text-gray-400">
          #{pokemon.id.toString().padStart(3, "0")}
        </span>
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={
              pokemon.sprites.other["official-artwork"].front_default ||
              pokemon.sprites.front_default
            }
            alt={pokemon.name}
            className="w-48 h-48 object-contain"
          />

          <div className="flex gap-2 mt-2">
            {pokemon.types.map((t) => (
              <span
                key={t.type.name}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm capitalize"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        {/* Info box */}
        <div className="bg-blue-100 p-4 rounded-md w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Info</h2>
          <div className="text-sm space-y-1">
            <p>
              <strong>Height:</strong> {(pokemon.height / 10).toFixed(1)} m
            </p>
            <p>
              <strong>Weight:</strong> {(pokemon.weight / 10).toFixed(1)} kg
            </p>
            <p>
              <strong>Abilities:</strong>{" "}
              {pokemon.abilities.map((a) => a.ability.name).join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Stats</h2>
        <div className="grid gap-2">
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name}>
              <p className="capitalize text-sm mb-1">
                {stat.stat.name}:{" "}
                <span className="font-semibold">{stat.base_stat}</span>
              </p>
              <div className="bg-gray-200 h-3 rounded-full">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Moves */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Moves</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
          {pokemon.moves.slice(0, 20).map((move) => (
            <span
              key={move.move.name}
              className="bg-gray-100 px-2 py-1 rounded-md capitalize"
            >
              {move.move.name}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}

export default PokemonDetails;
