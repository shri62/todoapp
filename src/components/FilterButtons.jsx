
import { useFilter } from "../context/FilterContext";

function FilterButtons() {
  const { filter, setFilter } = useFilter();

  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("all")}>
        All
      </button>

      <button onClick={() => setFilter("active")}>
        Active
      </button>

      <button onClick={() => setFilter("completed")}>
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;


