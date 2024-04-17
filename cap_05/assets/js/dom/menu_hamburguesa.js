export default function hamburgesaMenu(
  panelBtn,
  panel,
  claseToggleMenu,
  classToggleHamburger,
  menuLink
) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle(claseToggleMenu);
      d.querySelector(panelBtn).classList.toggle(classToggleHamburger);
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove(claseToggleMenu);
      d.querySelector(panelBtn).classList.remove(classToggleHamburger);
    }
  });
}
