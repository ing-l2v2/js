const d = document;
export function shortcuts(e) {
  /*console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.ctrlKey);
  console.log(e.altKey);
  console.log(e.shiftKey);
  console.log(e);*/
  if (e.key === "a" && e.altKey) {
    alert(`Lanzaste una alerta con el teclado Alt + "${e.key}"`);
  }
  if (e.key === "c" && e.altKey) {
    let $confirm = confirm(
      `Lanzaste una confirmación con el teclado Alt + "${e.key}"`
    );
    alert(`Resultado de la confirmación ${$confirm}`);
  }
  if (e.key === "p" && e.altKey) {
    let $prompt = prompt(`Lanzaste un aviso con el teclado Alt + "${e.key}"`);
    alert(`Resultado del prompt "${$prompt}"`);
  }
}

let x = 0,
  y = 0; // variables para control del movimiento
export function moveBall(e, ball, stage, pxMove) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    $limitBall = $ball.getBoundingClientRect(),
    $limitStage = $stage.getBoundingClientRect();
  //console.log($limitBall);
  //console.log($limitStage);
  if (e.keyCode >= 37 && e.keyCode <= 40) {
    console.log(`movimiento cod: ${e.keyCode}, key: ${e.key}`);
    //e.preventDefault();
  }
  // Para no aplicar preventDefault y hacerlo con un atajo shift + ArrowUp,Down,etc.
  // ArrowUp
  if (e.keyCode === 38 && e.shiftKey) {
    if ($limitBall.top > $limitStage.top) y--;
  }
  // ArrowDown
  if (e.keyCode === 40 && e.shiftKey) {
    if ($limitBall.bottom + pxMove < $limitStage.bottom) y++;
  }
  // ArrowLeft
  if (e.keyCode === 37 && e.shiftKey) {
    if ($limitBall.left > $limitStage.left) x--;
  }
  // ArrowRight
  if (e.keyCode === 39 && e.shiftKey) {
    if ($limitBall.right < $limitStage.right - pxMove) x++;
  }
  /*
    switch (e.keyCode) {
      case 37:      // ArrowLeft
      x--;      break;
      case 38:      // ArrowUp 
      y--;      break;
      case 39:      // ArrowRight 
      x++;      break;
      case 40:      // ArrowDown 
      y++;      break;
    }
    */
  $ball.style.transform = `translate(${x * pxMove}px, ${y * pxMove}px)`;
  /*
  console.log(
    `$limitBall { top: ${$limitBall.top}, left: ${$limitBall.left}, bottom: ${$limitBall.bottom}, right: ${$limitBall.right}, x: ${$limitBall.x}, y: ${$limitBall.y} }`
  );  
  console.log(
    `$limitStage { top: ${$limitStage.top}, left: ${$limitStage.left}, bottom: ${$limitStage.bottom}, right: ${$limitStage.right}, x: ${$limitStage.x}, y: ${$limitStage.y} }`
  );
  */
}
