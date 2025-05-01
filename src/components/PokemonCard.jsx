import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  const {
    id,
    name,
    sprites: { back_default },
    types,
  } = pokemon;

  return (
    <Link to={`/pokemons/${name}`}>
      <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300">
        <img
          src={back_default}
          alt={name}
          className="w-24 h-24 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold capitalize mb-2">
          #{id} {name}
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {types.map((typeInfo) => (
            <span
              key={typeInfo.slot}
              className="px-2 py-1 bg-gray-200 rounded-full text-xs font-medium capitalize"
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default PokemonCard;
