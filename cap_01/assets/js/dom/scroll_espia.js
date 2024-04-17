const d = document;
export default function scrollSpy() {
  const aQuienObserva = d.querySelectorAll("section[data-scroll-spy]");
  const callBack = (entradas) => {
    entradas.forEach((entrada) => {
      const id = entrada.target.getAttribute("id");
      if (entrada.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };
  const opciones = {
    // root,  es el documento
    //rootMargin: -150, // reducir zona de interseccion
    threshold: [0.5, 0.55], // reducir zona de intersección, valor entre 0 y 1 o como array [min, max]
  };
  const observador = new IntersectionObserver(callBack, opciones);
  aQuienObserva.forEach(($seccion) => {
    observador.observe($seccion);
  });
}
