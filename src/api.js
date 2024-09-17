import axios from "axios";

export const fetchCountries = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v2/all");
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch country data.");
  }
};
