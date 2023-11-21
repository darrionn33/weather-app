import "./styles.css";
import rootRender from "./rootRender";
import weatherCard from "./components/weatherCard";

const getWeather = async (city = "shillong") => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=a932c33ba7a541f1976170645232011&q=${city}`
    );
    const data = await response.json();
    let weatherData = data;
    rootRender(weatherCard(weatherData));
  } catch (e) {
    alert(e);
  }
};
getWeather();
// const searchBar = () => {
//   const searchBar = put("div");
//   const input = put("input", { placeholder: "xyz" });
//   put(searchBar, input);
//   input.onchange = () => {
//     rootRender("", "rpc");
//     getWeather(input.value);
//   };
//   return searchBar;
// };
// rootRender(searchBar());
