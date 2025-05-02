import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filter, setFilter] = useState([]);
  console.log(filter);

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) throw new Error("FilterContext used outside of provider.");
  return context;
}

export default FilterProvider;
