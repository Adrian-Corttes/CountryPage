import React from "react";

const Country = ({ flag, name, fifa }) => {
  return (
    <div className="">
      <h2>{name}</h2>
      <img src={flag} alt={fifa} />
    </div>
  );
};

export default Country;
