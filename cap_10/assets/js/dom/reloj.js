const d = document;
export function digitalClock(divClock, btnPlay, btnStop) {
  let clockTmp;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTmp = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(divClock).setAttribute("visibility", "visible");
        d.querySelector(divClock).innerHTML = `${clockHour}`;
      }, 1000);
      e.target.disabled = true;
      d.querySelector(btnStop).disabled = false;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clockTmp);
      d.querySelector(divClock).innerHTML = null;
      d.querySelector(divClock).setAttribute("visibility", "hidden");
      e.target.disabled = true;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
export function alarma(sonido, btnPlay, btnStop) {
  let alarmTmp;
  const $audioAlarma = d.createElement("audio");
  $audioAlarma.setAttribute("src", sonido);
  //$audioAlarma.src = sonido;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmTmp = setTimeout(() => {
        $audioAlarma.play();
      }, 2000);
      e.target.disabled = true;
      d.querySelector(btnStop).disabled = false;
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTmp);
      $audioAlarma.pause();
      $audioAlarma.currentTime = 0;
      e.target.disabled = true;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
