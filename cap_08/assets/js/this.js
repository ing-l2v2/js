"use strict";
console.log(globalThis === window);
console.log(this === window);
globalThis.nomvar = "Contexto Global";
console.log(window.nomvar, globalThis.nomvar);

function imprimir() {
  console.log(globalThis.nomvar);
}
imprimir();

const obj = {
  nomvar: "Contexto objeto",
  imprimir: function () {
    console.log(this.nomvar);
  },
};
obj.imprimir();

function imprimir2() {
  console.log(this.nomvar);
}
const obj2 = {
  nomvar: "Contexto objeto 2",
  imprimir2,
};
obj2.imprimir2();

/* La arrow function no maneja su propio scope sino el del objeto global, generando como error Uncaught TypeError: Cannot read properties of undefined (reading 'nom_variable') */
const obj3 = {
  nomvar: "Contexto objeto 3",
  imprimir: () => {
    console.log(globalThis.nomvar);
  },
  subobj3: {
    nomvar: "Contexto sub objeto 3",
    imprimir: () => {
      console.log(this.nomvar);
    },
  },
};
//obj3.imprimir();
//obj3.subobj3.imprimir();

/* Usar funciones anonimas en objetos y evitar crear arrow functions dado que no proveen scope */

/* Cambio en return comentado realiza que la instancia al ejecutar como funcion invoque al obj global provocando un error. return comentado al crear instancias de la clase Persona imprime el contenido de variable. función de retorno se invoca con la instancia como función lito() pero como es una función argumentada y no tiene la variable en su scope entonces genera error "Uncaught TypeError: Cannot read properties of undefined", para lo cual con un return de arrow function no ocurriria */
function Persona(nom) {
  this.nom = nom;
  //return console.log(this.nom);
  // return function () {
  //   console.log(this.nom);
  // };
  return () => console.log(this.nom);
}
const lito = new Persona("Leonel objPersona");
lito();

/* call */
const objcall = {
  myName: "khriztianmoreno",
  printName: function () {
    console.log(this.myName);
  },
};
objcall.printName(); // khriztianmoreno
const newObj = {
  myName: "mafeserna",
};
objcall.printName.call(newObj); //mafeserna

/* apply */
function sayHello(greet, msg) {
  console.log(`${greet} ${this.name} ! ${msg}`);
}
const objapply = {
  name: "khriztianmoreno",
};
// Call
sayHello.call(objapply, "Hello", "Good Morning");
// Apply
sayHello.apply(objapply, ["Hello", "Good Morning"]);

/* bind */
function sayHelloBind(greet) {
  console.log(`${greet} ${this.name}`);
}
const objBind = { name: "khriztianmoreno" };
// it won't invoke, it just returns back the new function instance
const newFunc = sayHelloBind.bind(objBind, "Hello");
newFunc(); // khriztianmoreno

/* Ejemplos call */
function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  Car.call(this, "convertible", "petrol");
  this.brand = brand;
  console.log(`Car details = `, this);
}

function definePrice(price) {
  Car.call(this, "convertible", "diesel");
  this.price = price;
  console.log(`Car details = `, this);
}

const newBrand = new setBrand("Brand1");
const newCarPrice = new definePrice(100000);

/* json */
const jsonObj = {
  cadena: "Leonel",
  numero: 53,
  booleano: true,
  arreglo: ["correr", "programar", "cocinar"],
  objeto: {
    twitter: "@LeonelVillaV1",
    email: "llvilla@espol.edu.ec",
  },
  nulo: null,
};
const json = JSON.stringify(jsonObj);
console.log(json);
const jsonText =
  '{"cadena": "Leonel", "numero": 53, "booleano": true, "arreglo": ["correr", "programar", "cocinar"], "objeto": { "twitter": "@LeonelVillaV1", "email": "llvilla@espol.edu.ec" }, "nulo": null}';
const json2 = JSON.parse(jsonText);
console.log(json2);
console.log(JSON.parse('"Hola mundo"'));
