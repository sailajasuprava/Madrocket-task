import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const PokemonContext = createContext();

function PokemonProvider({ children }) {
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
      setPokemons(detailedPokemon);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        isLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);
  if (!context) throw new Error("PokemonContext used outside of provider.");
  return context;
}

export default PokemonProvider;
