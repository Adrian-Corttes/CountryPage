import React from "react";
import "../../styles/SearchForm.css"

const SearchForm = ({ setName, handleFetchCountryData }) => {
  return (
    <div action="#" className="SearchForm">
      <input className="input"
        type="text"
        name="#"
        id="#"
        placeholder="Nombre del pais"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleFetchCountryData}>Buscar</button>
    </div>
  );
};

export default SearchForm;
