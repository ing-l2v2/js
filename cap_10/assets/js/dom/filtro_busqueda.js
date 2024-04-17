const d = document;
export default function searchFilters(idInput, selectorDondeBuscar) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(idInput)) {
      //console.log(e.key);
      if (e.key === "Escape") e.target.value = "";
      d.querySelectorAll(selectorDondeBuscar).forEach((elem) => {
        elem.textContent.toLowerCase().includes(e.target.value)
          ? elem.classList.remove("filter")
          : elem.classList.add("filter");
      });
    }
  });
}
