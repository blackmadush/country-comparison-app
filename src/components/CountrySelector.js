import React from "react";
import { FormControl, InputLabel, MenuItem, Select, Grid } from "@mui/material";

const CountrySelector = ({ countries, handleSelect, selectedCountries }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>First Country</InputLabel>
          <Select
            value={selectedCountries[0] || ""}
            onChange={(input) => handleSelect(input.target.value, 1)}
            label="First Country"
          >
            {countries.map((country) => (
              <MenuItem key={country.alpha3Code} value={country.alpha3Code}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Second Country</InputLabel>
          <Select
            value={selectedCountries[1] || ""}
            onChange={(e) => handleSelect(e.target.value, 2)}
            label="Second Country"
          >
            {countries.map((country) => (
              <MenuItem key={country.alpha3Code} value={country.alpha3Code}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CountrySelector;
