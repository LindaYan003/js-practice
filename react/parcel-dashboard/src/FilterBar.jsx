const FILTERS = [
  { key: "all", label: "All" },
  { key: "completed", label: "Completed" },
  { key: "inactive", label: "Inactive" },
];

function FilterBar({ filter, onFilterChange }) {
  return (
    <div>
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          style={{ fontWeight: filter === key ? "bold" : "normal" }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
