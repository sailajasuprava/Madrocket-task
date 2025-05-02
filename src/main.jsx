import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SearchProvider from "./context/SearchContext.jsx";
import PokemonProvider from "./context/PokemonContext.jsx";
import FilterProvider from "./context/FilterContext.jsx";
import FavoritesProvider from "./context/FavoritesContext.jsx";
import SortProvider from "./context/SortContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokemonProvider>
      <FavoritesProvider>
        <SearchProvider>
          <FilterProvider>
            <SortProvider>
              <App />
            </SortProvider>
          </FilterProvider>
        </SearchProvider>
      </FavoritesProvider>
    </PokemonProvider>
  </StrictMode>
);
