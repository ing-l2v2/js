const d = document,
  n = navigator;
export default function getUbicacion(idInfoUbicacion) {
  const $divgeo = d.getElementById(idInfoUbicacion),
    opcGeolocalizacion = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  const casoExito = (posicion) => {
    let coordenadas = posicion.coords;
    let zoomNivel = "15z";
    console.log(posicion);

    $divgeo.innerHTML = `
    <p>Tu posición actual es:</p>
    <ul>
      <li>Latitud: <b>${coordenadas.latitude}</b></li>
      <li>Longitud: <b>${coordenadas.longitude}</b></li>
      <li>Precision: <b>${coordenadas.accuracy}</b> metros</li>      
    </ul>
    <a href="http://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},${zoomNivel}" target="_blank" rel="noopener noreferrer">Ver mapa</a> <br>
    <a href="https://www.openstreetmap.org?mlat=${coordenadas.latitude}&mlon=${coordenadas.longitude}" target="_blank" rel="noopener noreferrer">Ver mapa en OpenStreetMap</a>

    `;
  };
  const casoError = (err) => {
    $divgeo.insertAdjacentHTML(
      "beforebegin",
      `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
    );
    console.log(`Error ${err.code}: ${err.message}`);
  };
  n.geolocation.getCurrentPosition(casoExito, casoError, opcGeolocalizacion);
}
