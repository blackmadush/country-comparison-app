import React, { useEffect, useState } from "react";
import { fetchCountries } from "./api";
import CountrySelector from "./components/CountrySelector";
import CountryInfo from "./components/CountryInfo";
import { Container, Typography } from "@mui/material";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([null, null]);
  const [countryDetails, setCountryDetails] = useState([null, null]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        setError("Error fetching countries");
      }
    };
    getCountries();
  }, []);

  const handleSelect = (countryCode, index) => {
    const selectedCountry = countries.find(
      (country) => country.alpha3Code === countryCode
    );

    const newCountryDetails = [...countryDetails];
    newCountryDetails[index - 1] = selectedCountry;
    setCountryDetails(newCountryDetails);

    const newSelectedCountries = [...selectedCountries];
    newSelectedCountries[index - 1] = countryCode;
    setSelectedCountries(newSelectedCountries);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        Country Comparison
      </Typography>
      {error && <Typography color="error">{error}</Typography>}

      <CountrySelector
        countries={countries}
        handleSelect={handleSelect}
        selectedCountries={selectedCountries}
      />

      <div className="comparison">
        <CountryInfo country={countryDetails[0]} />
        <CountryInfo country={countryDetails[1]} />
      </div>
    </Container>
  );
};

export default App;
