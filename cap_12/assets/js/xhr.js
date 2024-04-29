const d = document,
  $form = d.querySelector(".crud-xhr-form"),
  $table = d.querySelector(".crud-xhr-table"),
  $title = d.querySelector(".crud-xhr-title"),
  $template = d.getElementById("crud-xhr-template").content,
  $fragmento = d.createDocumentFragment();

const fncXhr = (objOpciones) => {
  // Mediante destructuración
  // url, method son String, data es un object, success y error son funciones.
  let { url, method, success, error, data } = objOpciones;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let mensaje =
        xhr.statusText ||
        `Posible error de conexión, instalar y levantar JSON Server :: "json-server -p 5555 -w cap_12/assets/json/db.json" y verificar Endpoint`;
      error(`Error ${xhr.status}: ${mensaje}`);
    }
  });

  xhr.open(method || "GET", url); // Sin method entonces GET

  xhr.setRequestHeader("Content-type", "application/json, charset=utf-8");

  xhr.send(JSON.stringify(data));
};

const getTodosFamiliares = () => {
  fncXhr({
    method: "GET", // Si se obvia será GET
    url: "http://localhost:5555/familiares",
    success: (respuesta) => {
      //      console.log(respuesta);
      respuesta.forEach((resp) => {
        $template.querySelector(".nombre").textContent = resp.nombre;
        $template.querySelector(".apellido").textContent = resp.apellido;
        $template.querySelector(".edad").textContent = resp.edad;
        $template.querySelector(".email").textContent = resp.informacion.email;
        $template.querySelector(".facebook").textContent =
          resp.informacion.facebook;

        // Creacion de data-attributes con valores para el boton editar
        $template.querySelector(".edit").dataset.id = resp.id;
        $template.querySelector(".edit").dataset.nombre = resp.nombre;
        $template.querySelector(".edit").dataset.apellido = resp.apellido;
        $template.querySelector(".edit").dataset.edad = resp.edad;
        $template.querySelector(".edit").dataset.email = resp.informacion.email;
        $template.querySelector(".edit").dataset.facebook =
          resp.informacion.facebook;
        $template.querySelector(".edit").dataset.fecha = resp.fecha;

        // Creacion de data-attributes con valores para el boton eliminar
        $template.querySelector(".delete").dataset.id = resp.id;

        let $cloneTemplate = d.importNode($template, true);
        $fragmento.appendChild($cloneTemplate);
      });
      $table.querySelector("tbody").appendChild($fragmento);
    },
    error: (err) => {
      //console.error(err);
      const $p = d.createElement("p"),
        $b = d.createElement("b");
      $b.textContent = err;
      $p.insertAdjacentElement("afterbegin", $b);
      $table.insertAdjacentElement("afterend", $p);
    },
    data: null, // puede obviarse data por ser GET
  });
};

d.addEventListener("DOMContentLoaded", getTodosFamiliares);

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      // Create - POST
      fncXhr({
        method: "POST", // Si se obvia será GET
        url: "http://localhost:5555/familiares",
        success: (respuesta) => location.reload,
        error: (error) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          apellido: e.target.apellido.value,
          edad: e.target.edad.value,
          informacion: {
            email: e.target.email.value,
            facebook: e.target.facebook.value,
          },
          fecha: new Date(),
        },
      });
    } else {
      // Update - PUT
      fncXhr({
        method: "PUT", // Si se obvia será GET
        url: `http://localhost:5555/familiares/${e.target.id.value}`,
        success: (respuesta) => location.reload,
        error: (error) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          apellido: e.target.apellido.value,
          edad: e.target.edad.value,
          informacion: {
            email: e.target.email.value,
            facebook: e.target.facebook.value,
          },
          fecha: new Date(),
        },
      });
    }
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = `Editar familiar ${e.target.dataset.nombre}`;
    $form.nombre.value = e.target.dataset.nombre;
    $form.apellido.value = e.target.dataset.apellido;
    $form.edad.value = e.target.dataset.edad;
    $form.email.value = e.target.dataset.email;
    $form.facebook.value = e.target.dataset.facebook;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete")) {
    if (confirm(`Seguro desea eliminar entrada id ${e.target.dataset.id}?`)) {
      // Delete - DELETE
      fncXhr({
        method: "DELETE", // Si se obvia será GET
        url: `http://localhost:5555/familiares/${e.target.dataset.id}`,
        success: (respuesta) => location.reload,
        error: (error) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`),
      });
    }
  }
});
