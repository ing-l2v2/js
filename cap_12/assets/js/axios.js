const //d = document,
  $formAxios = d.querySelector(".crud-axios-form"),
  $tableAxios = d.querySelector(".crud-axios-table"),
  $titleAxios = d.querySelector(".crud-axios-title"),
  $templateAxios = d.getElementById("crud-axios-template").content,
  $fragmentoAxios = d.createDocumentFragment();

const getAllFamily = async () => {
  try {
    let respuestas = await axios.get("http://localhost:5555/familiares"),
      json = await respuestas.data;

    json.forEach((el) => {
      $templateAxios.querySelector(".nombre").textContent = el.nombre;
      $templateAxios.querySelector(".apellido").textContent = el.apellido;
      $templateAxios.querySelector(".edad").textContent = el.edad;
      $templateAxios.querySelector(".email").textContent = el.informacion.email;
      $templateAxios.querySelector(".facebook").textContent =
        el.informacion.facebook;

      // Creación de data-attributes con valores para el botón editar
      $templateAxios.querySelector(".edit-axios").dataset.id = el.id;
      $templateAxios.querySelector(".edit-axios").dataset.nombre = el.nombre;
      $templateAxios.querySelector(".edit-axios").dataset.apellido =
        el.apellido;
      $templateAxios.querySelector(".edit-axios").dataset.edad = el.edad;
      $templateAxios.querySelector(".edit-axios").dataset.email =
        el.informacion.email;
      $templateAxios.querySelector(".edit-axios").dataset.facebook =
        el.informacion.facebook;
      $templateAxios.querySelector(".edit-axios").dataset.fecha = el.fecha;

      // Creación de data-attributes con valores para el botón eliminar
      $templateAxios.querySelector(".delete-axios").dataset.id = el.id;

      let $cloneTemplate = d.importNode($templateAxios, true);
      $fragmentoAxios.appendChild($cloneTemplate);
    });
    $tableAxios.querySelector("tbody").appendChild($fragmentoAxios);
  } catch (err) {
    let mensaje =
      err.statusText ||
      `Posible error de conexión, instalar y levantar JSON Server :: "json-server -p 5555 -w cap_12/assets/json/db.json"; verificar Endpoint`;
    $tableAxios.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status || 0}: ${mensaje}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAllFamily);

d.addEventListener("submit", async (e) => {
  if (e.target === $formAxios) {
    e.preventDefault();
    if (!e.target.id.value) {
      // Create - POST
      try {
        let objOpciones = {
            method: "POST",
            headers: {
              "Content-type": "Application/json;charset=utf-8",
            },
            data: JSON.stringify({
              nombre: e.target.nombre.value,
              apellido: e.target.apellido.value,
              edad: e.target.edad.value,
              informacion: {
                email: e.target.email.value,
                facebook: e.target.facebook.value,
              },
              fecha: new Date(),
            }),
          },
          respuestas = await axios(
            `http://localhost:5555/familiares`,
            objOpciones
          ),
          json = await respuestas.data;
        location.reload();
      } catch (error) {
        let mensaje =
          err.statusText ||
          `Posible error de conexión, instalar y levantar JSON Server :: "json-server -p 5555 -w cap_12/assets/json/db.json"; verificar Endpoint`;
        const $p = d.createElement("p"),
          $b = d.createElement("b");
        $b.textContent = `Error ${err.status}: ${mensaje}`;
        $p.insertAdjacentElement("afterbegin", $b);
        $formFetch.insertAdjacentElement("afterend", $p);
      }
    } else {
      // Create - PUT
      try {
        let objOpciones = {
            method: "PUT",
            headers: {
              "Content-type": "Application/json;charset=utf-8",
            },
            data: JSON.stringify({
              nombre: e.target.nombre.value,
              apellido: e.target.apellido.value,
              edad: e.target.edad.value,
              informacion: {
                email: e.target.email.value,
                facebook: e.target.facebook.value,
              },
              fecha: new Date(),
            }),
          },
          respuestas = await axios(
            `http://localhost:5555/familiares/${e.target.id.value}`,
            objOpciones
          ),
          json = await respuestas.data;
        location.reload();
      } catch (error) {
        let mensaje =
          err.statusText ||
          `Posible error de conexión, instalar y levantar JSON Server :: "json-server -p 5555 -w cap_12/assets/json/db.json"; verificar Endpoint`;
        const $p = d.createElement("p"),
          $b = d.createElement("b");
        $b.textContent = `Error ${err.status}: ${mensaje}`;
        $p.insertAdjacentElement("afterbegin", $b);
        $formFetch.insertAdjacentElement("afterend", $p);
      }
    }
  }
});

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit-axios")) {
    $titleAxios.textContent = "Editar familiar";
    $formAxios.nombre.value = e.target.dataset.nombre;
    $formAxios.apellido.value = e.target.dataset.apellido;
    $formAxios.edad.value = e.target.dataset.edad;
    $formAxios.email.value = e.target.dataset.email;
    $formAxios.facebook.value = e.target.dataset.facebook;
    $formAxios.id.value = e.target.dataset.id;
  }

  if (e.target.matches(".delete-axios")) {
    if (confirm(`Estás seguro de eliminar el id ${e.target.dataset.id}?`)) {
      // Delete - DELETE
      try {
        let objOpciones = {
          method: "DELETE",
          headers: {
            "Content-type": "Application/json;charset=utf-8",
          },
        };
        let respuestas = await axios(
          `http://localhost:5555/familiares/${e.target.dataset.id}`,
          objOpciones
        );
        let json = await respuestas.data;
        location.reload();
      } catch (err) {
        let mensaje =
          err.statusText ||
          `Posible error de conexión, instalar y levantar JSON Server :: "json-server -p 5555 -w cap_12/assets/json/db.json"; verificar Endpoint`;
        const $p = d.createElement("p"),
          $b = d.createElement("b");
        $b.textContent = `Error ${err.status}: ${mensaje}`;
        $p.insertAdjacentElement("afterbegin", $b);
        $formFetch.insertAdjacentElement("afterend", $p);
      }
    }
  }
});
