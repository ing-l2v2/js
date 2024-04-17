const d = document;
export default function countdown(idSelector, limitDate, finalMsj) {
  const $countdown = d.getElementById(idSelector),
    countdownDate = new Date(limitDate).getTime();
  let countdownInterval = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      dias = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      horas = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutos = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      segundos = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);
    $countdown.textContent = `Faltan: ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
    if (limitTime < 0) {
      clearInterval(countdownInterval);
      $countdown.textContent = `${finalMsj}`;
    }
  }, 1000);
}
