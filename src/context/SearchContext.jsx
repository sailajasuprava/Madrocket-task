import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
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
  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        pokemons,
        setPokemons,
        isLoading,
        filter,
        setFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("SearchContext used outside of provider.");
  return context;
}

export default SearchProvider;
