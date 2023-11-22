import "./styles.css";
import rootRender from "./rootRender";
import weatherCard from "./components/weatherCard";
import searchBar from "./components/searchBar";

const setCity = (city) => {
  rootRender("", "rpc");
  getWeather(city);
};

rootRender(searchBar(setCity));

const getWeather = async (city = "shillong") => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=a932c33ba7a541f1976170645232011&q=${city}`
    );
    const data = await response.json();
    let weatherData = data;
    rootRender(weatherCard(weatherData));
  } catch (e) {
    console.log(e);
  }
};

getWeather();
