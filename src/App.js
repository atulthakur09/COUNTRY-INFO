import axios from "axios";
import {} from "module";
import "./index.css";
import { useEffect, useState } from "react";

export default function Flag() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const result = response.data;
        setCountries(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      axios
        .get(`https://restcountries.com/v3.1/name/${selectedCountry}`)
        .then((response) => {
          const [country] = response.data;
          setCountryData(country);
        })
        .catch((err) => {
          console.log(err);
          setCountryData(null);
        });
    }
  }, [selectedCountry]);

  return (
    <div>
      <h1>Country Information</h1>
      <select
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>

      {countryData && (
        <div>
          <h2>{countryData.name.common}</h2>
          <img
            width="157"
            src={countryData.flags.png}
            alt={`${countryData.name.common} flag`}
          />
          <p>
            <b>Capital:</b> {countryData.capital}
          </p>
          <p>
            <b>Currency:</b>
            {
              countryData.currencies[Object.keys(countryData.currencies)[0]]
                .name
            }
            {"   "}"
            {
              countryData.currencies[Object.keys(countryData.currencies)[0]]
                .symbol
            }
            "
          </p>

          <p>
            <b>Population:</b> {countryData.population}
          </p>
          <p>
            <b>Region:</b> {countryData.region}
          </p>
          <p>
            <b>Subregion:</b> {countryData.subregion}
          </p>
          <p>
            <b>Time Zone:</b> {countryData.timezones}
          </p>
          <p>
            <b>Continent:</b> {countryData.continents}
          </p>

          <p>
            <b>Land Area:</b> {countryData.area} km²
          </p>
          <p>
            <b>Google Map:</b>{" "}
            <a
              href={countryData.maps.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
