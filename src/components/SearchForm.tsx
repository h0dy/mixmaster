import { useState, type FormEvent } from "react";
import useGlobalContext from "../globalContext";

const SearchForm = () => {
  const [search, setSearch] = useState("");

  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    setSearchTerm(search);
  };
  
  return (
    <div className="mb-20">
      <form
        className="bg-gray-100 p-8 shadow w-full max-w-xl mx-auto my-8 rounded grid grid-cols-[1fr_auto]"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          name="search"
          className="form-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
