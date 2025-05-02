import { createContext, useContext, useState } from "react";

const SortContext = createContext();

function SortProvider({ children }) {
  const [sortBy, setSortBy] = useState("");

  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </SortContext.Provider>
  );
}

export function useSort() {
  const context = useContext(SortContext);
  if (!context) throw new Error("SortContext used outside of provider.");
  return context;
}

export default SortProvider;
