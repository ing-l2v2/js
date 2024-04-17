const w = window,
  d = document,
  n = navigator,
  ua = n.userAgent;
export default function userDeviceInfo(idDivRetorno) {
  const $idSalida = d.getElementById(idDivRetorno),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };
  $idSalida.innerHTML = `
  <ul>
    <li>User Agent <b>${ua}</b></li>
    <li>Plataforma: ${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
    <li>Navegador: ${isBrowser.any()}</li>
  </ul>`;
  /* *** Contenido exclusivo *** */
  if (isBrowser.chrome())
    $idSalida.innerHTML += `<p>Este contenido solo se ve en Chrome</p>`;
  if (isBrowser.firefox())
    $idSalida.innerHTML += `<p>Este contenido solo se ve en Firefox</p>`;
  if (isDesktop.windows())
    $idSalida.innerHTML += `<p>Ej.: Descarga el software para windows</p>`;
  if (isMobile.android()) w.location.href = "https://ing-l2v2.github.io/cv";
}
