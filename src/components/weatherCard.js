import put from "put-selector";

const weatherCard = (weatherData) => {
  const weatherCard = put("div.weather-card");
  const title = put(
    "h1.title",
    weatherData.location.name + "'s Weather Right Now!"
  );

  const conditionIcon = put("img.condition-img", {
    src: weatherData.current.condition.icon.split("64x64").join("128x128"),
  });

  const infoDiv = put("div.info");
  const temperature = put("h3.temp", weatherData.current["temp_c"] + "°C");
  const condition = put("h3.condition", weatherData.current.condition.text);
  // to set time and check if AM or PM
  let n = weatherData.location.localtime.split(" ")[1].split("");
  if (n.length < 5) {
    n.unshift("0");
  }
  const time = n.join("");
  let ext = "AM";
  if (+(n[0] + n[1]) >= 12) {
    ext = "PM";
  }
  // to set time and check if AM or PM
  const timeH3 = put("h3.time", time + ext);
  put(weatherCard, title);
  put(weatherCard, conditionIcon);
  put(weatherCard, infoDiv);
  put(infoDiv, temperature);
  put(infoDiv, condition);
  put(infoDiv, timeH3);
  return weatherCard;
};

export default weatherCard;
