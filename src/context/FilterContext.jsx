
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

// Create Filter Context
const FilterContext = createContext();

export function FilterProvider({ children }) {
  // Store the selected filter
  const [filter, setFilterState] = useState("all");

  // Change the filter
  const setFilter = useCallback((newFilter) => {
    setFilterState(newFilter);
  }, []);

  // Share filter values
  const value = useMemo(() => ({
    filter,
    setFilter,
  }), [filter, setFilter]);

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}

// Use Filter Context
export function useFilter() {
  return useContext(FilterContext);
}
