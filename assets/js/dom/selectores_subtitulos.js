const d = document;
export default function clickOnSubtitulo(selector) {
  const $secciones = d.querySelectorAll(selector);
  //console.log($secciones);
  $secciones.forEach(($seccion) => {
    d.addEventListener("click", (e) => {
      //console.log(e.target);
      if (e.target.matches(".cv-card *")) {
        const $lis = d.querySelectorAll(".cv-card ul li");
        console.log($lis);
      }
    });
  });
}
