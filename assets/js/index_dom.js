import hamburgesaMenu from "./dom/menu_hamburguesa.js";
import scrollSpy from "./dom/scroll_espia.js";
import scrollTopButton from "./dom/scroll_top.js";
import clickOnSubtitulo from "./dom/selectores_subtitulos.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgesaMenu(
    ".panel-btn",
    ".panel-dom",
    "esta-activo",
    "is-active",
    ".menu-dom a"
  );
  scrollTopButton(".scroll-top-btn");
  scrollSpy();
  clickOnSubtitulo(".seccion");
});
