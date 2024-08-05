import axios from "axios";
import { SearchType } from "../types";

export default function useWeather() {
  const fetchWeather = async (search: SearchType) => {
    const appId = "f6b6a19b45d94bfa321e0f8510bc9ebb";

    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;

      const { data } = await axios(geoUrl); //asi tal cual hace una peticion get
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchWeather,
  };
}
