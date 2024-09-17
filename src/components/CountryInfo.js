import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import "./CountryInfo.css";

const CountryInfo = ({ country }) => {
  if (!country) return <div>Please select a country.</div>;

  return (
    <Card className="country-card">
      <CardContent>
        <Grid container spacing={2}>
          {/* Flag */}
          <Grid item xs={12} md={4} className="flag-container">
            <img
              src={country.flag}
              alt={`Flag of ${country.name}`}
              className="country-flag"
            />
          </Grid>

          {/* Country Info */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" className="country-name">
              {country.name}
            </Typography>
            <Typography variant="body1">
              <strong>Native Name:</strong> {country.nativeName || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Capital:</strong> {country.capital || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Region:</strong> {country.region || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Subregion:</strong> {country.subregion || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Population:</strong>{" "}
              {country.population?.toLocaleString() || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Area:</strong> {country.area?.toLocaleString() || "N/A"}{" "}
              km²
            </Typography>
            <Typography variant="body1">
              <strong>Languages:</strong>{" "}
              {country.languages?.map((lang) => lang.name).join(", ") || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Calling Code:</strong> +
              {country.callingCodes ? country.callingCodes[0] : "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Timezones:</strong>{" "}
              {country.timezones?.join(", ") || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Currencies:</strong>{" "}
              {country.currencies
                ?.map((currency) => `${currency.name} (${currency.symbol})`)
                .join(", ") || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Borders:</strong> {country.borders?.join(", ") || "None"}
            </Typography>
            <Typography variant="body1">
              <strong>Top-Level Domain:</strong>{" "}
              {country.topLevelDomain?.join(", ") || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Demonym:</strong> {country.demonym || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Regional Bloc:</strong>{" "}
              {country.regionalBlocs?.[0]?.name || "None"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CountryInfo;
