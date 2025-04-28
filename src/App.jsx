import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Spinner from "./components/Spinner";
import PokemonList from "./components/PokemonList";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=150"
      );

      const detailedPokemon = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return res.data;
        })
      );
      console.log(detailedPokemon);

      setPokemons(detailedPokemon);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <Spinner />;

  return (
    <div>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
