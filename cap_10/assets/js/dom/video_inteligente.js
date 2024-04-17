const d = document,
  w = window;

export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");
  const callBack = (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.play();
      } else {
        entrada.target.pause();
      }
      w.addEventListener("visibilitychange", (e) =>
        d.visibilityState === "visible"
          ? entrada.target.play()
          : entrada.target.pause()
      );
    });
  };
  const observador = new IntersectionObserver(callBack, { threshold: 0.8 });
  $videos.forEach((el) => observador.observe(el));
}
