/* XMLHttpRequest */
(() => {
  const d = document,
    xhr = new XMLHttpRequest(),
    $ol = d.getElementById("xhr"),
    $fragmento = d.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log(xhr.responseText);
      let jsonObjs = JSON.parse(xhr.responseText);
      jsonObjs.forEach((jsonObj) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${jsonObj.name} -- ${jsonObj.email} -- ${jsonObj.phone}`;
        $fragmento.appendChild($li);
      });
      $ol.appendChild($fragmento);
    } else {
      console.log("Error de conexión");
      let mensaje = xhr.statusText || "Posible error de conexión";
      $ol.innerHTML = `Error ${xhr.status}: ${mensaje}`;
    }
  });

  //xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.open("GET", "assets/json/usuarios.json");

  xhr.send();
})();

/* FETCH */
(() => {
  const d = document,
    $ol = d.getElementById("fetch"),
    $fragmento = d.createDocumentFragment();
  fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
    /*
    .then((respuesta) => {
      console.log(respuesta);
      return respuesta.ok ? respuesta.json() : Promise.reject(respuesta);
    }) 
    */
    .then((respuesta) =>
      respuesta.ok ? respuesta.json() : Promise.reject(respuesta)
    )
    .then((jsonObjs) => {
      //console.log(jsonObjs);
      jsonObjs.forEach((jsonObj) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${jsonObj.name} -- ${jsonObj.email} -- ${jsonObj.phone}`;
        $fragmento.appendChild($li);
      });
      $ol.appendChild($fragmento);
    })
    .catch((errores) => {
      let mensaje = errores.statusText || "Posible error de conexión";
      $ol.innerHTML = `Error ${errores.status}: ${mensaje}`;
    })
    .finally(() =>
      console.log(
        "Finally se ejecuta independientemente del resultado de la promesa Fetch"
      )
    );
})();

/* FETCH-Async-await */
(() => {
  const d = document,
    $ol = d.getElementById("fetch-async"),
    $fragmento = d.createDocumentFragment();

  async function getDatos() {
    try {
      let respuesta = await fetch("https://jsonplaceholder.typicode.com/users"),
        jsonObjs = await respuesta.json();

      if (!respuesta.ok)
        throw {
          status: respuesta.status,
          statusText: respuesta.statusText,
        };

      jsonObjs.forEach((jsonObj) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${jsonObj.name} -- ${jsonObj.email} -- ${jsonObj.phone}`;
        $fragmento.appendChild($li);
      });
      $ol.appendChild($fragmento);
    } catch (error) {
      let mensaje = error.statusText || "Posible error de conexión";
      $ol.innerHTML = `Error ${error.status}: ${mensaje}`;
    } finally {
      console.log(
        "Finally se ejecuta independientemente del resultado de la promesa Fetch-Async"
      );
    }
  }

  getDatos();
})();

/* Librería Axios */
(() => {
  const d = document,
    $ol = d.getElementById("axios"),
    $fragmento = d.createDocumentFragment();
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((respuesta) => {
      console.log(respuesta);
      let jsonObjs = respuesta.data;
      jsonObjs.forEach((jsonObj) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${jsonObj.name} -- ${jsonObj.email} -- ${jsonObj.phone}`;
        $fragmento.appendChild($li);
      });
      $ol.appendChild($fragmento);
    })
    .catch((err) => {
      //console.log(err);
      let mensaje = err.response.statusText || "Posible error de conexión";
      $ol.innerHTML = `Error ${err.response.status}: ${mensaje}`;
    })
    .finally(() =>
      console.log(
        "Finally se ejecuta independientemente del resultado de la promesa Axios"
      )
    );
})();

/* Librería Axios + Async-Await */
(() => {
  const d = document,
    $ol = d.getElementById("axios-async"),
    $fragmento = d.createDocumentFragment();

  async function getDatos() {
    try {
      let respuesta = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        ),
        jsonObjs = await respuesta.data;

      jsonObjs.forEach((jsonObj) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${jsonObj.name} -- ${jsonObj.email} -- ${jsonObj.phone}`;
        $fragmento.appendChild($li);
      });
      $ol.appendChild($fragmento);
    } catch (error) {
      let mensaje = error.response.statusText || "Posible error de conexión";
      $ol.innerHTML = `Error ${error.response.status}: ${mensaje}`;
    } finally {
      console.log(
        "Finally se ejecuta independientemente del resultado de la promesa Axios-Async"
      );
    }
  }

  getDatos();
})();
