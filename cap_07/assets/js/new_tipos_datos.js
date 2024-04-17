const NOMBRE = Symbol();
const SALUDAR = Symbol("MetodoPrivado");

const persona = {
  [NOMBRE]: "leonel.villa",
  email: "llvilla@espol.edu.ed",
  edad: 52,
};
persona.NOMBRE = "Leonel Villa Vintimilla";
persona[SALUDAR] = function () {
  console.log(
    `Hola como estas ${persona.NOMBRE} el correo privado es ${persona[NOMBRE]}`
  );
};
console.log(persona);
persona.NOMBRE = "Leonel Leonardo Villa Vintimilla";
persona[NOMBRE] = "lvilla@fidenslat.com";
console.log(persona);
persona[SALUDAR]();

/* Sets */
const set = new Set([
  1,
  2,
  3,
  3,
  4,
  5,
  true,
  false,
  false,
  {},
  {},
  "hola",
  "HOla",
]);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(true);

/* Map */
const mapa2 = new Map([
  ["nombre", "Tom"],
  ["edad", 7],
  ["genero", "macho"],
]);
const mapa = new Map();
mapa.set("a", 1);
mapa.set("b", 2);
mapa.set("3", 3);
mapa.set("a", 97);
console.log(mapa.get("a"));
console.log(mapa.size);
for (let item of mapa) {
  console.log(`Key = ${item[0]}, Value = ${item[1]}`);
}
for (let [key, valor] of mapa) {
  console.log(`Key => ${key}, Value => ${valor}`);
}
mapa.forEach((valor, key) => {
  console.log(`Key ${key}, Value ${valor}`);
});
mapa.delete("b");

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

/* Weaksets & weakmaps */
const ws = new WeakSet();
let valor1 = { valor: 10 },
  valor2 = { valor: "20" },
  valor3 = { valor: 30 };
ws.add(valor1);
ws.add(valor2);
ws.add(valor3);
console.log(ws.has(valor2));
//console.log(ws.get(valor2));
console.log(ws);

const wm = new WeakMap();
let llave1 = {},
  llave2 = {},
  llave3 = {};
wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);
console.log(wm.get(llave1));
console.log(wm.has(llave1));
wm.delete(llave2);
console.log();

const iterable = [1, 2, 3, 4, 5];
const iterador = iterable[Symbol.iterator]();
console.log(iterador);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

const iterableSet = new Set([10, 20, 30, 20, 40]);
const iteradorSet = iterableSet[Symbol.iterator]();
let itera = iteradorSet.next();
while (!itera.done) {
  console.log(itera.value);
  itera = iteradorSet.next();
}

/* Generadores */
function* generador() {
  yield "hola";
  console.log("Hola consola segundo dato iterable");
  yield "hola 2";
  console.log("Seguimos con mas intrucciones");
  yield "hola 3";
  yield "hola 4";
}
let iteradorGenerador = generador();
/*
console.log(iteradorGenerador.next());
console.log(iteradorGenerador.next());
console.log(iteradorGenerador.next());
console.log(iteradorGenerador.next());
console.log(iteradorGenerador.next());
*/
for (let y of iteradorGenerador) {
  console.log(y);
}
const arrGenerador = [...generador()];
console.log(arrGenerador);

/* Asincrono no bloqueante */
function cuadrado(valor) {
  setTimeout(() => {
    console.log(`${valor}, resultado: ${valor * valor}`);
  }, Math.random() * 1000);
  return { valor, resultado: valor * valor };
}
function* generadorCuadrado() {
  console.log(`Inicia Generador`);
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.log(`Termina Generador`);
}
const arrGeneradorCuadrado = [...generadorCuadrado()];
console.log(arrGeneradorCuadrado);

let iteradorGeneradorCuadrado = generadorCuadrado();
for (let y of iteradorGeneradorCuadrado) {
  console.log(y);
}

/* Proxies */
const objPersona = { nom: "", apellido: "", edad: 0 };

const manejadorPersona = {
  set(obj, prop, desc) {
    if (prop in obj) {
      console.log(
        `Existe propiedad ${prop} en obj, se modifica contenido de "${obj[prop]}" a "${desc}"`
      );
      obj[prop] = desc;
    } else {
      console.error(
        `No existe definida la propiedad ${prop} en el objeto, no asigna valor ${desc}`
      );
    }
    return true;
  },

  defineProperty: (object, prop, descriptor) => {
    console.log(`A property was set with defineProperty - ${prop}`);
    object[prop] = descriptor.value;
    return true;
  },

  has: (object, prop) => {
    if (object[prop] === undefined) {
      console.log(`Propiedad ${prop} no encontrada, con has `);
    }
    return object[prop];
  },

  get(object, prop) {
    return object[prop] || `Sorry :(( no existe prop ${prop}, get`;
  },
};

const lv = new Proxy(objPersona, manejadorPersona);
lv.nom = "Leonel";
lv.apellido = "Villa";
lv.edad = 52;
console.log("Revisando contenido de nom", lv.nom);
console.log("Revisando contenido de genero", lv.genero);
console.log("address" in lv);
Object.defineProperty(lv, "socialMedia", {
  value: "twitter socialMedia",
  writable: true,
  enumerable: true,
});
//lv["socialMedia"] = "twitter";
lv["edad"] = "123 Fake Street";
console.log("nom", objPersona.nom, lv.edad);
console.log("socialMedia", lv.socialMedia, lv.edad);

/* Compute properties */
const obUsrs = {
  propiedad: "valor",
  [`id_${Math.round(Math.random() * 95) + 5}`]: "Valor aleatorio",
};
const usrs = ["leo", "sebastian", "edgar", "irene", "ruth"];
usrs.forEach((usr, idx) => {
  obUsrs[`id_${idx}`] = usr;
});

console.log(obUsrs);
