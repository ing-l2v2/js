import hamburgesaMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarma } from "./dom/reloj.js";
import { shortcuts, moveBall } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/scroll_top.js";
import darkTheme from "./dom/tema_oscuro.js";
import { storageLocal } from "./dom/local_storage.js";
import { responsiveMedia } from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import { iniciarBD } from "./dom/indexed_DB.js";
import webCam from "./dom/deteccion_webcam.js";
import getUbicacion from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busqueda.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidation from "./dom/validaciones_form.js";
import speechReader from "./dom/narrador.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgesaMenu(
    ".panel-btn",
    ".panel-dom",
    "esta-activo",
    "is-active",
    ".menu-dom a"
  );
  d.getElementById("reloj-digital").setAttribute("visibility", "hidden");
  d.getElementById("desactivar-reloj").disabled = true;
  d.getElementById("desactivar-alarma").disabled = true;
  digitalClock("#reloj-digital", "#activar-reloj", "#desactivar-reloj");
  alarma("./assets/sound/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "Apr 12,2024 05:00:00",
    "Feliz cumpleaños a mi 🤓 !!!"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=FLIJx-gOBuw" target="_blank" rel="noopener noreferrer">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/4MwiQ66zqhg?si=CS1fWkPmjpnssZdo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=4MwiQ66zqhg" target="_blank" rel="noopener noreferrer">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2045.390102391041!2d-79.89048336656883!3d-2.115964350019626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMDYnNTQuMyJTIDc5wrA1MycyOC44Ilc!5e0!3m2!1ses!2sec!4v1712192932495!5m2!1ses!2sec" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("web-cam");
  getUbicacion("geolocation");
  searchFilters(".card-filter", ".tarjeta");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidation();
  iniciarBD();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage", 10);
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();

speechReader();
