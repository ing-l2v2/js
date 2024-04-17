console.log(window);
console.log(this);

/*
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
let pronunciara =
  "libreria speechSyntheis invoca al método speak el cual recibe como parámetro un nuevo objeto llamado SpeechSynthesisUtterance y a su vez recibe este texto";

hablar(pronunciara);
*/

/* Elementos del documento */
console.log(document);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
console.log(document.head);
console.log(document.body);
console.log(
  "En espera 5seg. de que seleccione un bloque de la pagina para obtener la captura"
);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 5000);
document.write(
  '<p>Mediante el método document.write("texto") se agrega texto al final del documento</p>'
);

/* */
let nodo = document.documentElement.firstChild;
if (nodo.nodeType !== Node.COMMENT_NODE)
  console.log("Debe comentar su código correctamente!");

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card9"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("que-es"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log("#menu li", document.querySelectorAll("#menu li"));

let links = document.querySelectorAll("a");
let enlaces = Array.prototype.slice.call(links);
console.log(enlaces);
enlaces = Array.from(links);
console.log(enlaces);

let classes = document.getElementsByClassName("card9");
let clases = Array.prototype.slice.call(classes);
console.log(clases);
clases = Array.from(classes);
console.log(clases);

/* */
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
document.querySelector(".link-dom").setAttribute("target", "_blank");
document.querySelector(".link-dom").setAttribute("rel", "noopener");
document
  .querySelector(".link-dom")
  .setAttribute("data-referencia", "Un data attr creado");
document.querySelector(".link-dom").dataset.info = "otro data attribute";

document
  .querySelector(".link-dom")
  .setAttribute("data-description", "Cambiando el data attribute");
console.log(
  document.querySelector(".link-dom").hasAttribute("data-description")
);
console.log(
  document.querySelector(".link-dom").getAttribute("data-description")
);
console.log(document.querySelector(".link-dom").dataset.description);

document.querySelector(".link-dom").removeAttribute("data-description");

/* Estilos y variables CSS */
const $linkDom = document.querySelector(".link-dom");
console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log($linkDom.style.backgroundColor);
console.log($linkDom.style.color);
console.log(window.getComputedStyle($linkDom));
console.log(
  window.getComputedStyle($linkDom).getPropertyValue("background-color")
);

$linkDom.style.setProperty("text-decoration", "none");
$linkDom.style.textDecoration = "none";
$linkDom.style.display = "block";
$linkDom.style.width = "50%";
$linkDom.style.textAlign = "center";
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight = "auto";

const $html = document.documentElement,
  $body = document.body,
  $idcssproperties = document.querySelector("#cssproperties");
let varYellowPractica = getComputedStyle($html).getPropertyValue(
    "--yellow-color-practica"
  ),
  varDarkColor = "",
  varHalfColor = "";
$html.style.setProperty("--dark-color", "#222");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
console.log(varYellowPractica, varDarkColor);
$idcssproperties.style.backgroundColor = varDarkColor;
$idcssproperties.style.setProperty("color", varYellowPractica);
// window.getComputedStyle($idcssproperties).setProperty("color", varYellowPractica);
varDarkColor = getComputedStyle($html).getPropertyValue("--bg-hard-1-7");
console.log(varDarkColor);
$html.style.setProperty("--dark-color", varDarkColor);
$idcssproperties.style.backgroundColor = varDarkColor;

/* Clases */
const $card = document.querySelector(".card9");
console.log($card.className); // String de clases separadas por espacio
console.log($card.classList); // DOMTokenList
console.log($card.classList.contains("card9")); // true
$card.classList.add("rotate-45");
console.log($card.className); // String de clases separadas por espacio
console.log($card.classList); // DOMTokenList
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("sepia", "opacity-80");
$card.classList.remove("rotate-45", "sepia");

/* texto y html */
const $whatIsDOM = document.getElementById("que-es");
let texto = `
  <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML
  </p>
  <p>
    Este provee una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
  </p>
  <p>
    <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
  </p>
  `;
$whatIsDOM.innerText = $whatIsDOM.innerText + texto;
$whatIsDOM.textContent = texto;
$whatIsDOM.innerHTML = texto;
$whatIsDOM.outerHTML = texto;

/* traversing */
let $cards = document.querySelector(".cards9");
console.log($cards.children); // return HTMLCollection de los hijos de cards9
console.log($cards.children[2]); // return el tercer hijo
console.log($cards.childNodes); // return NodeList como arr de todos los text figure existentes en el cards9
console.log($cards.firstElementChild); // primer nodo elemento hijo
console.log($cards.firstChild); // texto del .cards diferente a firstElementChild dado que no es un nodo de tipo elemento sino un salto de linea
console.log($cards.lastChild); // texto del .cards diferente a lastElementChild dado que no es un nodo de tipo elemento sino un salto de linea
console.log($cards.lastElementChild); // último nodo elemento hijo
console.log($cards.previousElementSibling); // nodo elemento hermano previo
console.log($cards.previousSibling); // texto del .cards diferente a previousElementSibling dado que no es un nodo de tipo elemento sino un salto de linea el nodo previo
console.log($cards.nextSibling); // texto del .cards diferente a nextElementSibling dado que no es un nodo de tipo elemento sino un salto de linea el nodo siguiente
console.log($cards.nextElementSibling); // nodo elemento hermano siguiente
console.log($cards.parentElement); // padre del .cards9 osea .cv-card, mismo resultado que con parentNode
console.log($cards.closest("article")); // Busca el ancestro tag html mas cercado que lo contiene
console.log($cards.children[3].closest("section")); // Busca el ancestro tag html mas cercado que lo contiene

/* creando elementos y fragmentos */
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("People");
$cards9 = document.querySelector(".cards9");

$img.setAttribute("src", "https://source.unsplash.com/category/people/120x120");
$img.setAttribute("alt", "Gente - People");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figure.classList.add("card9");
$cards9.appendChild($figure);

const $figure2 = document.createElement("figure");
$figure2.innerHTML = `
  <img src = "https://source.unsplash.com/category/nature/110x110" alt="Nature">
  <figcaption>Naturaleza</figcaption>
`;
$figure2.classList.add("card9");
$cards9.appendChild($figure2);

const estaciones = ["primavera", "verano", "otoño", "invierno"];
$ul = document.createElement("ul");
document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);
estaciones.forEach((elem) => {
  const $li = document.createElement("li");
  $li.textContent = elem;
  $ul.appendChild($li);
});

const continentes = ["Africa", "Asia", "Europa", "Oceanía", "América"];
$ul2 = document.createElement("ul");
document.write("<h3>Continentes</h3>");
document.body.appendChild($ul2);
//$ul2.innerHTML = "";
continentes.forEach((elem) => {
  $ul2.innerHTML += `<li>${elem}</li>`;
});

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const $ul3 = document.createElement("ul"),
  $fragmento = document.createDocumentFragment();
meses.forEach((elem) => {
  const $li = document.createElement("li");
  $li.textContent = elem;
  $fragmento.appendChild($li);
});
document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragmento);
document.body.appendChild($ul3);

/* templates html */
const $cards9_2 = document.querySelector(".cards9"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://source.unsplash.com/category/technology/120x120",
    },
    {
      title: "Aleatoria",
      img: "https://source.unsplash.com/random/120x120",
    },
    {
      title: "Comida",
      img: "https://source.unsplash.com/category/food/120x120",
    },
    {
      title: "Construcción",
      img: "https://source.unsplash.com/category/buildings/120x120",
    },
    {
      title: "Gente",
      img: "https://source.unsplash.com/category/people/120x120",
    },
    {
      title: "Naturaleza",
      img: "https://source.unsplash.com/category/nature/120x120",
    },
    {
      title: "1BHfsOyLer8",
      img: "https://source.unsplash.com/collection/1BHfsOyLer8/120x120",
    },
    {
      title: "881002",
      img: "https://source.unsplash.com/collection/881002/120x120",
    },
    {
      title: "fGPRnpEt4yM",
      img: "https://source.unsplash.com/collection/fGPRnpEt4yM/120x120",
    },
    {
      title: "W9ZW6R9-3CI",
      img: "https://source.unsplash.com/collection/W9ZW6R9-3CI/120x120",
    },
  ];

cardContent.forEach((elem) => {
  let $cloneTemplate = document.importNode($template, true);
  $cloneTemplate.querySelector("img").setAttribute("src", elem.img);
  $cloneTemplate.querySelector("img").setAttribute("alt", elem.title);
  $cloneTemplate.querySelector("figcaption").textContent = elem.title;
  $cloneTemplate.querySelector("figure").classList.add("card9");
  $fragment.appendChild($cloneTemplate);
});
$cards9_2.appendChild($fragment);

/* Elementos old style */
const $cards9_3 = document.querySelector(".cards9"),
  $fragment2 = document.createDocumentFragment();
$cloneTemplate = document.importNode($template, true);
$cloneTemplate
  .querySelector("img")
  .setAttribute("src", "https://source.unsplash.com/random/120x120");
$cloneTemplate.querySelector("img").setAttribute("alt", "Random");
$cloneTemplate.querySelector("figcaption").textContent = "Random";
$cloneTemplate.querySelector("figure").classList.add("card9");
$fragment2.appendChild($cloneTemplate);

//$cards9_3.replaceChild($fragment2, $cards9_3.children[2]);
//$cards9_3.insertBefore($fragment2, $cards9_3.children[1]);
$cards9_3.insertBefore($fragment2, $cards9_3.firstElementChild);
$cards9_3.removeChild($cards9_3.lastElementChild);

const $cloneCards = $cards9_3.children[0].cloneNode(true);
$cards9_3.replaceChild($cloneCards, $cards9_3.children[3]);

/* Elementos cool style */
const $figure_4 = document.createElement("figure"),
  $img_4 = document.createElement("img"),
  $figcaption_4 = document.createElement("figcaption"),
  $figcaptionText_4 = document.createTextNode("Any");
$cards9 = document.querySelector(".cards9");

$img_4.setAttribute("src", "https://source.unsplash.com/random/120x120");
$img_4.setAttribute("alt", "Any");
$figcaption_4.appendChild($figcaptionText_4);
$figure_4.appendChild($img_4);
$figure_4.appendChild($figcaption_4);
$figure_4.classList.add("card9");
$cards9.insertAdjacentElement("afterbegin", $figure_4);

const $newCard = document.createElement("figure");
$newCard.innerHTML = `
  <img src="https://source.unsplash.com/random/120x120" alt="AnyR">
  <figcation>AnyR</figcaption>
`;
$newCard.classList.add("card9");
$cards9.insertAdjacentElement("afterbegin", $newCard);

const $newCard_2 = document.createElement("figure");
let $contentCard = `
  <img src="https://source.unsplash.com/random/130x130" alt="adjacentHTML">
  <figcation></figcaption>
`;
$newCard_2.classList.add("card9");
$newCard_2.insertAdjacentHTML("afterbegin", $contentCard);
$newCard_2.insertAdjacentText("beforeend", "texto");
$cards9.insertAdjacentElement("afterbegin", $newCard_2);

$cards9.prepend($newCard_2);
$cards9.append($newCard_2);
$cards9.before($newCard_2);
$cards9.after($newCard_2);

/* Events */
function fncComoEventHandler() {
  alert("Esta función se convertiría en el Event Handler fncComoEventHandler");
  console.log(event);
}

const eventoSemantico = document.getElementById("evento-semantico");
eventoSemantico.onclick = fncComoEventHandler;
eventoSemantico.onclick = function (e) {
  alert(
    `Hola mundo, este es un manejador de eventos semantico ${event.target}`
  );
};

const eventoMultiple = document.getElementById("evento-multiple");
eventoMultiple.addEventListener("click", fncComoEventHandler);
eventoMultiple.addEventListener("click", () => {
  alert(`Hola mundo, manejador de eventos múltiples ${event.target}`);
});

/* Eventos con parametros */
function saludarDeEvento(nombre = "Desconocid@") {
  alert(`Hola ${nombre} - ${event}`);
  console.log(`Hola, ${nombre} - ${event}`);
}
eventoMultiple.addEventListener("click", () => {
  saludarDeEvento();
  saludarDeEvento("Leonel");
});

const eventoRemover = document.getElementById("evento-remover");
const removerDobleClick = (e) => {
  alert(`Removiendo el evento "${e.type}"`);
  console.log(e);
  eventoRemover.removeEventListener("dblclick", removerDobleClick);
  eventoRemover.disabled = true;
};
eventoRemover.addEventListener("dblclick", removerDobleClick);

const eventoRemover2 = document.getElementById("evento-remover-2");
eventoRemover2.addEventListener("dblclick", removerDobleClic);
setTimeout(() => {
  eventoRemover2.removeEventListener("dblclick", removerDobleClic);
  document.getElementById("evento-removido").innerHTML =
    "<b>Evento removido, trascurrieron 6 segundos desde la carga de la página.</b>";
}, 6000);

function removerDobleClic(e) {
  alert(`Removiendo el evento "${e.type}"`);
  console.log(e);
}

let $btnDetallarOpcion = document.getElementById("btn-detallar-opcion"),
  $detallarOpcion = document.getElementById("detallar-opcion");
$detallarOpcion.hidden = true;
function fncDetallarOpcion(e) {
  $detallarOpcion.hidden = !$detallarOpcion.hidden;
}
$btnDetallarOpcion.addEventListener("click", fncDetallarOpcion);

/* Flujo de eventos */
/* Burbuja */
const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);
$divsEventos.forEach((divElem) => {
  divElem.addEventListener("click", flujoEventos);
});
function flujoEventos(e) {
  console.log(
    `Hola te saluda la clase ${this.className}, el click lo origino el div ${e.target.className}`
  );
  e.stopPropagation();
}

const $link = document.querySelector(".eventos-flujo a");
$link.addEventListener("click", (e) => {
  alert(`Mensaje en a antes del href`);
  e.preventDefault();
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  console.log("Click en", e.target);
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }
  if (e.target.matches(".eventos-flujo a")) {
    alert(`Mensaje en a antes del href`);
    e.preventDefault();
  }
});

window.addEventListener("resize", (e) => {
  document.getElementById(
    "inner"
  ).textContent = `window.innerWidth: ${window.innerWidth} x window.innerHeight: ${window.innerHeight}`;
  document.getElementById(
    "outer"
  ).textContent = `windows.outerWidth: ${window.outerWidth} x windows.outerHeight: ${window.outerHeight}`;
});

// window.addEventListener("scroll", (e) => {
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e.type);
// });

// window.addEventListener("load", (e) => {
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e.type);
// });

document.addEventListener("DOMContentLoaded", (e) => {
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e.type);
});

const btnAbrir = document.getElementById("abrir-ventana"),
  btnCerrar = document.getElementById("cerrar-ventana"),
  btnImprimir = document.getElementById("imprimir-ventana");
let referenciaWindowOpen;
btnAbrir.addEventListener("click", (e) => {
  referenciaWindowOpen = window.open("https://ing-l2v2.github.io/cv");
});
btnCerrar.addEventListener("click", (e) => {
  //referenciaWindowOpen.window.close();
  referenciaWindowOpen.close();
});
btnImprimir.addEventListener("click", (e) => {
  window.print();
});

console.log("location ", location);
console.log("origen ", location.origin);
console.log("protocol ", location.protocol);
console.log("host ", location.host);
console.log("hostname ", location.hostname);
console.log("port ", location.port);
console.log("href ", location.href);
console.log("hash ", location.hash);
console.log("hash ", location.search);
console.log("pathname ", location.pathname);

console.log("history ", history);
console.log("history ", history);

console.log("navigator ", navigator);
console.log("connection ", navigator.connection); // tipo de conexión 4g
console.log("geolocation ", navigator.geolocation);
console.log("mediaDevices ", navigator.mediaDevices);
console.log("mimeTypes (deprecada) ", navigator.mimeTypes);
console.log("onLine ", navigator.onLine);
console.log("serviceWorker ", navigator.serviceWorker); // ayudar a hacer progressive webapps, para convertir un simple sitio web en una app instalable
console.log("storage ", navigator.storage);
console.log("usb ", navigator.usb);
console.log("userAgent ", navigator.userAgent);
