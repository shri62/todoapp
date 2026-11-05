
import { createContext, useContext, useState } from "react";

// Create Filter Context
const FilterContext = createContext();

// Create Provider
export function FilterProvider({ children }) {
  // Store the current filter
  const [filter, setFilter] = useState("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

// Use Filter Context in other components
export function useFilter() {
  return useContext(FilterContext);
}
