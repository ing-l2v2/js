const d = document,
  ls = localStorage;
export default function darkTheme(btnSelector, classDarkSelectores) {
  const $themeBtn = d.querySelector(btnSelector),
    $selectores = d.querySelectorAll("[data-dark-mode]");
  let moon = "🌙",
    sun = "🌞";
  const ligthMode = () => {
    $selectores.forEach((item) => item.classList.remove(classDarkSelectores));
    $themeBtn.textContent = moon;
    ls.setItem("themeDark", "ligth");
  };
  const darkMode = () => {
    $selectores.forEach((item) => item.classList.add(classDarkSelectores));
    $themeBtn.textContent = sun;
    ls.setItem("themeDark", "dark");
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnSelector) || e.target.matches(`${btnSelector} *`)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        ligthMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    //alert("Me encuentro en el DOMContentLoaded del tema_oscuro.js");
    if (ls.getItem("themeDark") === null) ls.setItem("themeDark", "ligth");
    if (ls.getItem("themeDark") === "ligth") ligthMode();
    if (ls.getItem("themeDark") === "dark") darkMode();
  });
}
