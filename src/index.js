import "./styles.css";
import rootRender from "./rootRender";
import weatherCard from "./components/weatherCard";
import searchBar from "./components/searchBar";

const loading = document.createElement("p");
loading.textContent = "Loading...";
loading.classList.add("loading");

const error = document.createElement("p");
error.textContent = "Error: Location not found!";
error.classList.add("error");

const setCity = (city) => {
  rootRender("", "rpc");
  rootRender(loading);
  getWeather(city);
};

rootRender(searchBar(setCity));
rootRender(loading);
const getWeather = async (city = "shillong") => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=a932c33ba7a541f1976170645232011&q=${city}`
    );
    const data = await response.json();
    let weatherData = data;
    rootRender("", "rpc");
    rootRender(weatherCard(weatherData));
  } catch (e) {
    rootRender("", "rpc");
    rootRender(error);
  }
};

getWeather();
