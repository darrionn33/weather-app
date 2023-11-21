import put from "put-selector";

const weatherCard = (weatherData) => {
  const weatherCard = put("div.weather-card");
  const title = put(
    "h1.title",
    weatherData.location.name + "'s Weather Right Now!"
  );

  const conditionIcon = put("img.condition-img", {
    src: weatherData.current.condition.icon,
  });

  const infoDiv = put("div.info");
  const temperature = put("h3.temp", weatherData.current["temp_c"] + "°C");
  const condition = put("h3.condition", weatherData.current.condition.text);

  put(weatherCard, title);
  put(weatherCard, conditionIcon);
  put(weatherCard, infoDiv);
  put(infoDiv, temperature);
  put(infoDiv, condition);
  return weatherCard;
};

export default weatherCard;
