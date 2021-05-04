import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const inputField = useRef("");

  useEffect(() => {
    inputField.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-control">
          <label htmlFor="name">Search your favouriye drink</label>
          <input
            ref={inputField}
            valu={searchTerm}
            type="text"
            id="name"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
