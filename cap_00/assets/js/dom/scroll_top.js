const d = document,
  w = window;
export default function scrollTopButton(btnSelector) {
  const $scrollBtn = d.querySelector(btnSelector);
  /* Para resolver si botón es visible o no en base al scroll vertical
  mediante las propiedades w.pageYOffset (deprecada) o d.documentElement.scrollTop (vigente) */
  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrollTop >= 500) $scrollBtn.classList.remove("hidden");
    else $scrollBtn.classList.add("hidden");
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnSelector) || e.target.matches(`${btnSelector} *`)) {
      console.log(`${e.type}, ${btnSelector}, ${btnSelector} *`);
      w.scrollTo({
        behavior: "smooth",
        top: 0,
        //left: 0,
      });
    }
  });
}
