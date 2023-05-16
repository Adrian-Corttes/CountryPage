import React, { useState } from "react";
import "../styles/hero.css";
//components
import SearchForm from "../components/CountryPage/SearchForm";
import Country from "../components/CountryPage/Country";
import FechError from "../components/FechError";

const CountryPage = () => {
  const [countryData, setCountryData] = useState([]);
  const [name, setName] = useState(null);
  const [error, setError] = useState(false);


  //Functions
  const handleFetchCountryData = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      console.log(data)
      if(data.status){
        setError(data.message)
      }else{
        setCountryData(data);
        setError(false) 
      }
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <>
      <h2>Esta es la pagina principal</h2>
      <SearchForm
        setName={setName}
        handleFetchCountryData={handleFetchCountryData}
      />
      {error ? (
      <FechError message={error} />) : (
      <div className="hero">
        {countryData.map((infoCountry) => (
          <Country
            key={infoCountry.name.common}
            name={infoCountry.name.common}
            flag={infoCountry.flags.png}
            fifa={infoCountry.fifa}
          />
        ))}
      </div>
      )}
    </>
  );
};

export default CountryPage;

//https://restcountries.com/v3.1/name/{name}
