import "./Filter.css";

function Filter({ filter, setFilter, setSort }) {
  return (
    <div className="task-filter">
      <h2>Filter</h2>
      <div className="filter-options">
        <div>
          <p>Status</p>
          <select
            name="filter"
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Finish">Finish</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="order">
          <p>Order</p>
          <div className="order-option">
            <button onClick={() => setSort("Asc")}>Asc</button>
            <button onClick={() => setSort("Desc")}>Desc</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
