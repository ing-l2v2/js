const d = document;
let bd;
export function iniciarBD() {
  let solicitud = indexedDB.open("bd-Contacto", 3);
  solicitud.addEventListener("error", mostrarError);
  solicitud.addEventListener("upgradeneeded", crearAlmacen);
  solicitud.addEventListener("success", comenzar);
  function mostrarError(e) {
    alert(`Presentamos un ERROR ${e.code} / ${e.message}`);
  }
  function comenzar(e) {
    bd = e.target.result;
    console.log("Función comenzar");
  }
  function crearAlmacen(e) {
    let basedatos = e.target.result;
    // Creación de un IDBObjectStore
    let almacen = basedatos.createObjectStore("contactos", { keypad: "id" });
    almacen.createIndex("buscarNombre", "nombre", { unique: false });
    console.log("Función crarAlmacen");
  }
}
