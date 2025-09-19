import React, { use } from "react";

export default function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
    </div>
  );
}
