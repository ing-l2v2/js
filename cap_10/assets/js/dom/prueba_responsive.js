const d = document,
  w = window;

export default function responsiveTester(idForm) {
  const $form = d.getElementById(idForm);
  let referenciaVentana;
  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      //alert("Form enviado");
      console.log(`ancho=${$form.ancho.value}, alto=${$form.alto.value}`);
      referenciaVentana = w.open(
        $form.direccion.value,
        "referenciaVentana",
        `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar && referenciaVentana !== undefined)
      referenciaVentana.close();
  });
}
