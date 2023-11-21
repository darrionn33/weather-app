import "./styles.css";
import rootRender from "./rootRender";
import put from "put-selector";

const getWeather = async (city = "shillong") => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=a932c33ba7a541f1976170645232011&q=${city}`
    );
    const data = await response.json();
    let weatherData = data;
    rootRender(everythingDiv(weatherData));
  } catch (e) {
    alert(e);
  }
};
getWeather();
const searchBar = () => {
  const searchBar = put("div");
  const input = put("input", { placeholder: "xyz" });
  put(searchBar, input);
  input.onchange = () => {
    rootRender("", "rpc");
    getWeather(input.value);
  };
  return searchBar;
};
rootRender(searchBar());
const everythingDiv = (weatherData) => {
  const everythingDiv = put("div.main");

  put(everythingDiv, "p", `Location: ${weatherData.location.name}`);
  put(everythingDiv, "p", `Temperature: ${weatherData.current.temp_c} °C`);
  put(everythingDiv, "p", `Condition: ${weatherData.current.condition.text}`);
  put(everythingDiv, "img", { src: weatherData.current.condition.icon });
  put(everythingDiv, "p", `Time: ${weatherData.location.localtime}`);
  put(
    everythingDiv,
    "p",
    `${weatherData.current["is_day"] === 1 ? "Day" : "Night"}`
  );

  return everythingDiv;
};
