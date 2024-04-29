const //d = document,
  $formFetch = d.querySelector(".crud-fetch-form"),
  $tableFetch = d.querySelector(".crud-fetch-table"),
  $titleFetch = d.querySelector(".crud-fetch-title"),
  $templateFetch = d.getElementById("crud-fetch-template").content,
  $fragmentoFetch = d.createDocumentFragment();

const getAllFamiliares = async () => {
  try {
    let respuestas = await fetch("http://localhost:5555/familiares"),
      json = await respuestas.json();
    console.log(json);
    if (!respuestas.ok)
      throw { status: respuestas.status, statusText: respuestas.statusText };

    json.forEach((el) => {
      $templateFetch.querySelector(".nombre").textContent = el.nombre;
      $templateFetch.querySelector(".apellido").textContent = el.apellido;
      $templateFetch.querySelector(".edad").textContent = el.edad;
      $templateFetch.querySelector(".email").textContent = el.informacion.email;
      $templateFetch.querySelector(".facebook").textContent =
        el.informacion.facebook;

      // Creacion de data-attributes con valores para el boton editar
      $templateFetch.querySelector(".edit-fetch").dataset.id = el.id;
      $templateFetch.querySelector(".edit-fetch").dataset.nombre = el.nombre;
      $templateFetch.querySelector(".edit-fetch").dataset.apellido =
        el.apellido;
      $templateFetch.querySelector(".edit-fetch").dataset.edad = el.edad;
      $templateFetch.querySelector(".edit-fetch").dataset.email =
        el.informacion.email;
      $templateFetch.querySelector(".edit-fetch").dataset.facebook =
        el.informacion.facebook;
      $templateFetch.querySelector(".edit-fetch").dataset.fecha = el.fecha;

      // Creacion de data-attributes con valores para el boton eliminar
      $templateFetch.querySelector(".delete-fetch").dataset.id = el.id;

      let $cloneTemplate = d.importNode($templateFetch, true);
      $fragmentoFetch.appendChild($cloneTemplate);
    });
    $tableFetch.querySelector("tbody").appendChild($fragmentoFetch);
  } catch (err) {
    let mensaje =
      err.statusText ||
      `Posible error de conexión, instalar y levantar JSON Server :: "json-server -p 5555 -w cap_12/assets/json/db.json"; verificar Endpoint`;
    const $p = d.createElement("p"),
      $b = d.createElement("b");
    $b.textContent = `Error ${err.status || 0}: ${mensaje}`;
    $p.insertAdjacentElement("afterbegin", $b);
    $tableFetch.insertAdjacentElement("afterend", $p);
  }
};

d.addEventListener("DOMContentLoaded", getAllFamiliares);

d.addEventListener("submit", async (e) => {
  if (e.target === $formFetch) {
    e.preventDefault();
    if (!e.target.id.value) {
      // Create - POST
      try {
        let objOpciones = {
            method: "POST",
            headers: {
              "Content-type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify({
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
          respuestas = await fetch(
            "http://localhost:5555/familiares",
            objOpciones
          ),
          json = await respuestas.json();
        if (!respuestas.ok) {
          throw {
            status: respuestas.status,
            statusText: respuestas.statusText,
          };
        }
        location.reload;
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
    } else {
      // Update - PUT
      try {
        let objOpciones = {
            method: "PUT",
            headers: {
              "Content-type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify({
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
          respuestas = await fetch(
            `http://localhost:5555/familiares/${e.target.id.value}`,
            objOpciones
          ),
          json = await respuestas.json();
        if (!respuestas.ok) {
          throw {
            status: respuestas.status,
            statusText: respuestas.statusText,
          };
        }
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

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit-fetch")) {
    $titleFetch.textContent = "Editar familiar";
    $formFetch.nombre.value = e.target.dataset.nombre;
    $formFetch.apellido.value = e.target.dataset.apellido;
    $formFetch.edad.value = e.target.dataset.edad;
    $formFetch.email.value = e.target.dataset.email;
    $formFetch.facebook.value = e.target.dataset.facebook;
    $formFetch.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete-fetch")) {
    if (confirm(`Estás seguro de eliminar el id ${e.target.dataset.id}?`)) {
      // Delete - DELETE
      try {
        let objOpciones = {
          method: "DELETE",
          headers: {
            "Content-type": "Application/json;charset=utf-8",
          },
        };
        let respuestas = await fetch(
          `http://localhost:5555/familiares/${e.target.dataset.id}`,
          objOpciones
        );
        let json = await respuestas.json();
        if (!respuestas.ok) {
          throw {
            status: respuestas.status,
            statusText: respuestas.statusText,
          };
        }
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
