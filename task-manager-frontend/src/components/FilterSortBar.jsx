function FilterSortBar({ filter, setFilter, sort, setSort }) {
  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="date">Date</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default FilterSortBar;
