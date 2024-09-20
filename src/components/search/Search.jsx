import "./Search.css";
import { FaSearch } from "react-icons/fa";

function Search({ search, setSearch }) {
  return (
    <div className="search">
      <h2>Search</h2>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Searching your task <<NAME>>"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
