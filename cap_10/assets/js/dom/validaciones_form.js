const d = document;
export default function contactFormValidation() {
  const $form = d.querySelector(".contacto-frm"),
    $inputs = d.querySelectorAll(".contacto-frm *[required]");
  $inputs.forEach(($input) => {
    const $span = d.createElement("span");
    $span.id = $input.name;
    $span.textContent = $input.title;
    $span.classList.add("contacto-frm-error", "none");
    $input.insertAdjacentElement("afterend", $span);
  });
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contacto-frm [required]")) {
      let $input = e.target,
        patron = $input.pattern || $input.dataset.pattern;
      // Por una experiencia de usuario no se recomienda if else en este caso
      // con else presenta span con espacio ""
      if (patron && $input.value !== "") {
        let regex = new RegExp(patron);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if (!patron) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });
  d.addEventListener("submit", (e) => {
    //e.preventDefault();
    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");
    $loader.classList.remove("none");
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
}
