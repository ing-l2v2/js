const d = document;
export default function inputMask(elInput, mascara) {
  const $inputElem = d.getElementById(elInput);
  let contenido = "",
    maxChars = numeroCaracteresPatron(mascara);

  $inputElem.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (esNumero(e.key) && contenido.length < maxChars) contenido += e.key;
    console.log(e);
    if (e.code === "Backspace") {
      if (contenido.length > 0)
        contenido = contenido.substring(0, contenido.length - 1);
    }
    $inputElem.value = maskIt(mascara, contenido);
  });
}

function esNumero(char) {
  return !isNaN(char - parseInt(char));
}

function maskIt(pattern, value) {
  let position = 0;
  let currentChar = 0;
  let masked = "";
  while (position < pattern.length && currentChar < value.length) {
    if (pattern[position] === "0") {
      masked += value[currentChar];
      currentChar++;
    } else {
      masked += pattern[position];
    }
    position++;
  }
  return masked;
}

function numeroCaracteresPatron(pattern) {
  let numberChars = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "0") {
      numberChars++;
    }
  }
  return numberChars;
}
