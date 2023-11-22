import put from "put-selector";
export default function searchBar(setCity) {
  let sent = false;
  const searchBar = put("div.search-bar");

  const searchInput = put("input", {
    placeholder: "Enter a city name here...",
  });
  searchInput.setAttribute("maxlength", 30);

  const handleInput = () => {
    if (!/^ /.test(searchInput.value)) {
      setCity(searchInput.value);
    }
    searchInput.value = "";
  };
  searchInput.onchange = () => {
    handleInput();
    sent = true;
  };
  searchInput.onkeydown = (e) => {
    setTimeout(() => {
      if (e.key === "Enter" && !sent) {
        handleInput();
      }
    }, 100);
  };
  put(searchBar, searchInput);
  return searchBar;
}
