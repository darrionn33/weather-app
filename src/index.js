import "./styles.css";
import rootRender from "./rootRender";
import put from "put-selector";

// const getWeather = async (city = "shillong") => {
//   try {
//     const response = await fetch(
//       `https://api.weatherapi.com/v1/current.json?key=a932c33ba7a541f1976170645232011&q=${city}`
//     );
//     const data = await response.json();
//     let weatherData = data;
//     rootRender(everythingDiv(weatherData));
//   } catch (e) {
//     alert(e);
//   }
// };
// getWeather();
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
// const everythingDiv = (weatherData) => {
//   const everythingDiv = put("div.main");

//   put(everythingDiv, "p", `Location: ${weatherData.location.name}`);
//   put(everythingDiv, "p", `Temperature: ${weatherData.current.temp_c} °C`);
//   put(everythingDiv, "p", `Condition: ${weatherData.current.condition.text}`);
//   put(everythingDiv, "img", { src: weatherData.current.condition.icon });
//   put(everythingDiv, "p", `Time: ${weatherData.location.localtime}`);
//   put(
//     everythingDiv,
//     "p",
//     `${weatherData.current["is_day"] === 1 ? "Day" : "Night"}`
//   );

//   return everythingDiv;
// };

const familyArray = [
  "Darrion",
  "Cassandra",
  "Ezio",
  "Ivoreen",
  "Regina",
  "Benjamin",
];

const searchDiv = put("div.search-div");
rootRender(searchDiv);

const input = put("input", { placeholder: "Enter a family member..." });
put(searchDiv, input);

const autoComplete = (value) => {
  while (searchDiv.children.length > 1) {
    searchDiv.removeChild(searchDiv.childNodes[1]);
  }
  let regEx=/ /;
  if (value !== "") {
    regEx = new RegExp(`^${value}`, "i");
  }
  
  familyArray
    .filter((member) => {
      return regEx.test(member);
    })
    .forEach((member, index) => {
      const memberDiv = put("div.member-div", member);
      memberDiv.style.bottom = `calc(${-100}% - ${index * 100}%`;
      searchDiv.appendChild(memberDiv);
    });
};

input.oninput = (e) => {
  autoComplete(e.target.value);
};
