const contarCaracteres = (cadena = "") => {
  if (!cadena) console.warm("No enviaste datos");
  else console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
  return cadena.length;
};
//console.log(contarCaracteres("Hola Mundo"));

const recortarCadena = (cadena = "", numCaracteres = undefined) =>
  !cadena
    ? console.warm(`Cadena está vacia`)
    : console.log(`Resultado es "${cadena.slice(0, numCaracteres)}"`);

//recortarCadena("Hola Mundo", 4);

const splitCadena = (cadena = "", separador = "") => {
  if (!cadena) {
    console.warm("Sin cadena");
    return null;
  }
  if (!separador) {
    console.warm("Sin separador");
    return null;
  }
  return cadena.split(separador);
};
//console.log(splitCadena("Hola que tal", " "));

const repiteTexto = (cadena = "", numRepite = 0) => cadena.repeat(numRepite);

//console.log(repiteTexto("Hola Mundo ", 3));

const invertirCadena = (cadena = "") =>
  !cadena ? "No se puede invertir cadena" : cadena.split("").reverse().join("");

//console.log(cadenaInvertir("Hola Mundo"));

const vecesRepiteTexto = (cadena = "", texto = "") => {
  if (!cadena || !texto) {
    console.warn("Definir parrafo y palabra");
    return [];
  }
  let i = 0,
    contador = 0,
    posiciones = [];
  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      contador++;
      posiciones.push(i);
      i++;
    }
  }
  return posiciones;
};

//console.log(vecesRepiteTexto("hola mundo adios mundo", "").length);

const palindromo = (cadena) =>
  !cadena
    ? "No ingreso cadena, no se puede determinar si es palindromo"
    : cadena.toLowerCase() === invertirCadena(cadena).toLowerCase()
    ? `La cadena "${cadena}" es una palabra palíndromo`
    : `"${cadena}" no es palíndromo dado que al invertir es ${invertirCadena(
        cadena
      )}`;

//console.info(palindromo("Salas"));

const eliminarPatron = (cadena = "", patron = "") =>
  !cadena || !patron
    ? "No registro la frase o el patron a eliminar"
    : cadena.replace(new RegExp(patron, "ig"), "");

//console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));

const random501_600 = () => Math.round(Math.random() * 100 + 501);

//console.info(random501_600());

const capicua = (valor = undefined) => {
  if (!valor) return "Parámetro valor es requerido";
  if (typeof valor !== "number") return "Valor debe ser numérico";
  valor = valor.toString();
  let alReves = valor.split("").reverse().join("");
  if (valor === alReves) return `El valor ${valor} es capícua.`;
  else return `El valor ${valor} NO es capícua, su reverso es ${alReves}`;
};
//console.log(capicua("21012"));

const factorial = (valor = undefined) => {
  if (!valor) return "Requiere recibir valor";
  if (typeof valor !== "number") return "Se requiere un número";
  valor = Number.parseInt(valor);
  if (valor <= 1) return 1;
  if (valor > 1) {
    valor *= factorial(valor - 1);
  }
  return valor;
};

//console.log(factorial(6));

const esPrimo = (numero = undefined) => {
  if (!numero || typeof numero !== "number" || numero === 0)
    return "Debe ingresar un dato numérico diferente de cero";
  numero = Math.abs(Number.parseInt(numero));
  let i = numero - 1;
  while (i > 1) {
    if (numero % i === 0) return false;
    i--;
  }
  return true;
};

//console.log(esPrimo(-1));

const esPar = (numero = undefined) => {
  if (!numero || typeof numero !== "number" || numero === 0)
    return "Debe ingresar un dato numérico y diferente de cero";
  numero = Math.abs(Number.parseInt(numero));
  return numero % 2 === 0 ? "par" : "impar";
};

// console.log(esPar(32));

const celciusToFahrenheit = (numero = undefined, conversion = "F") => {
  if (typeof numero !== "number") return "Debe ingresar un dato numérico";
  const regex = new RegExp("^[C|F]", "ig");
  if (!regex.test(conversion)) return "Tipo de conversion incorrecta";

  if (/^F/gi.test(conversion)) {
    let fahrenheit = (numero * 9) / 5 + 32;
    fahrenheit = fahrenheit.toFixed(2);
    return `" ${numero.toFixed(2)}°C " equivalen a " ${fahrenheit}°F "`;
  }
  let celcius = ((numero - 32) * 5) / 9;
  celcius = celcius.toFixed(2);
  return `" ${numero.toFixed(2)}°F " equivalen a " ${celcius}°C "`;
};

//console.log(celciusToFahrenheit(15, "f"));

/**
 * Convierte un número de binario a decimal o viceversa.
 * @param {*} num Número de base diez o binario
 * @param {*} base Base a la que se convierte 2 conversión a binario, 10 conversión a base diez
 * @returns String de conversión
 */
const binarioToDecimal = (num = undefined, base = undefined) => {
  if (
    num === undefined ||
    base === undefined ||
    typeof num !== "number" ||
    typeof base !== "number"
  )
    return `Definir valores de número " ${num} " y de base " ${base} " como numéricos`;

  let regex = new RegExp("^2|10");

  if (!regex.test(base))
    return "Tipo de conversion incorrecta, solo se admite 2 o 10.";

  regex = new RegExp("^1+(0|1)+$");
  if (base === 10 && !regex.test(num))
    return `${num} no admite conversión a base decimal. Binario solo se definen con 0s y 1s.`;

  return base === 10
    ? isNaN(Number.parseInt(num, 2))
      ? `${num} = sin conversión en base 10`
      : `( ${num} )2 = ( ${Number.parseInt(num, 2)} )10`
    : `( ${num} )10 = ( ${num.toString(2)} )2`;
};

//console.log(binarioToDecimal(10100101, 10));
//console.log(binarioToDecimal(1024, 2));

const aplicaDescuento = (monto, dscto) => {
  if (
    monto === undefined ||
    dscto === undefined ||
    typeof monto !== "number" ||
    typeof dscto !== "number"
  )
    return `Definir valores de monto " ${monto} " y de descuento " ${dscto} " como numéricos`;
  if (!(monto > 0 && dscto > 0))
    return `Monto y descuento deben ser mayores que cero.`;
  return monto * (1 - dscto / 100);
};

// console.log(aplicaDescuento(100, 20));

const aniosDesde = (fecha = undefined) => {
  if (fecha === undefined || !fecha instanceof Date)
    return "Fecha mal definida";
  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    anios = new Date().getFullYear() - fecha.getFullYear();
  return anios;
};

//console.log(aniosDesde(new Date(1971, 4, 2)));

const contarLetras = (cadena = "") => {
  if (!cadena || typeof cadena !== "string")
    return `variable cadena ${cadena} no definida o de tipo erroneo`;

  let vocales = 0,
    consonantes = 0;
  cadena = cadena.toLowerCase();
  for (let letra of cadena) {
    if (/[aeiouáéíóúü]/.test(letra)) vocales++;
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }
  return { cadena, vocales, consonantes };
};

//console.log(contarLetras("Hola mundo"));

const validarNombre = (nombre) => {
  if (!nombre) return `No ingresaste un nombre`;
  if (typeof nombre !== "string")
    return `El vlor ${nombre} ingresado NO es una cadena de texto.`;

  let regex = /^[a-zñÑáéíóúü]+[\s]?[a-zA-ZñÑáéíóúü]+$/gi;
  return regex.test(nombre)
    ? `${nombre.toUpperCase()}, es un nombre válido`
    : `${nombre}, NO es un nombre válido`;
};

// console.log(validarNombre("LEONEL Villa"));

const validarEmail = (email) => {
  if (!email) return `No ingresaste un email`;
  if (typeof email !== "string")
    return `El vlor ${email} ingresado NO es una cadena de texto.`;

  let regex =
    /^([a-z0-9_-]+[.]?)+([a-z0-9_-]+)+(@){1}([a-z0-9_-]+[.]?){1,2}(([a-z]){2,3}[.]?){1}([a-z]{2})?$/i;
  return regex.test(email)
    ? `${email.toLowerCase()}, es un email válido`
    : `${email}, NO es un email válido`;
};

//console.log("Email", validarEmail("leonel.villa.-1971@nivel1.nivel2.com.ec"));

//let regex =
/^([a-z0-9_-]+[.]?)+([a-z0-9_-]+)+(@){1}([a-z0-9_-]+[.]?){1,2}([a-z]{2,3}[.]?){1}([a-z]{2})?$/i;
//console.log(regex.test("l4v-_98.co@nivela.nivelb.com.ec"));

const arrValidaNoEmpty = (arr = undefined) => {
  let error = undefined;
  if (arr === undefined)
    error = `Arreglo está undefined.
  `;
  if (error === undefined && !arr instanceof Array)
    error = "Valor ingresado no es un arreglo";
  if (error === undefined && arr.length === 0) error = "El arreglo esta vacio.";
  return error;
};
const arrEsNumeros = (arr = undefined) => {
  let error = undefined;
  if (arrValidaNoEmpty(arr) === undefined) {
    let noNumber = 0;
    for (let num of arr) {
      if (typeof num !== "number") {
        ++noNumber;
        error = `${noNumber} elementos del arraglo, no numérico`;
      }
    }
  }
  return error;
};
const arrMinDosElem = (arr = undefined) => {
  let error = undefined,
    minElem = 2;
  if (arrValidaNoEmpty(arr) === undefined) {
    if (arr.length < minElem)
      error = `El arreglo debe tener mínimo ${minElem} elementos`;
  }
  return error;
};
const devolverCuadrado = (arr = undefined) => {
  let cuadrado = [];
  let error = arrEsNumeros(arr);
  if (error !== undefined) return { error, cuadrado };
  // arr.forEach((elem) => cuadrado.push(Math.pow(elem, 2)));
  cuadrado = arr.map((elem) => Math.pow(elem, 2));
  return { error: "", cuadrado };
};

// console.log(devolverCuadrado());
// console.log(devolverCuadrado([]));
// console.log(devolverCuadrado([1, "f", "c"]));
// console.log(devolverCuadrado([1, 4, 5]));

const altoBajo = (arr = undefined) => {
  const minMax = [];
  let min = Number.POSITIVE_INFINITY,
    max = Number.NEGATIVE_INFINITY;
  let error = arrEsNumeros(arr);
  if (error !== undefined) return { error, cuadrado };
  // if (error !== undefined) return { error, minMax };
  // arr.forEach((elem) => {
  //   if (elem <= min) min = elem;
  //   if (elem >= max) max = elem;
  // });
  min = Math.min(...arr);
  max = Math.max(...arr);
  minMax.push(min);
  minMax.push(max);
  return { error, minMax };
};

// console.log(altoBajo());
//console.log(altoBajo([1, 4, 5, 99, -60]));

const paresImparesArr = (arr = undefined) => {
  let objSalida = { error: arrEsNumeros(arr), pares: [], impares: [] };

  if (objSalida.error !== undefined) return { objSalida };
  // for (let elem of arr) {
  //   elem % 2 === 0 ? objSalida.pares.push(elem) : objSalida.impares.push(elem);
  // }
  objSalida.pares = arr.filter((elem) => elem % 2 === 0);
  objSalida.impares = arr.filter((elem) => elem % 2 !== 0);
  return objSalida;
};

//console.log(paresImparesArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

const ascDescArr = (arr = undefined) => {
  const objSalida = { error: arrEsNumeros(arr), asc: [], desc: [] };
  if (objSalida.error !== undefined) return objSalida;

  objSalida.asc = Array.from(arr);
  objSalida.asc.sort((a, b) => a - b);
  objSalida.desc = Array.from(objSalida.asc).reverse();
  return objSalida;
};

//console.log(ascDescArr([7, 9, 5, 7, 8, 6, 2, 4]));

const quitarDuplicados = (arr = undefined) => {
  let error = undefined;
  const objSalida = { error: arrMinDosElem(arr), arr, sinDupli: [] };
  if (objSalida.error !== undefined) return objSalida;
  objSalida.sinDupli = arr.filter(
    (elem, indice, self) => self.indexOf(elem) === indice
  );
  objSalida.sinDupli = [...new Set(arr)];
  return objSalida;
};
//console.log(quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true, "10"]));

const avgArr = (arr = undefined) => {
  const objSalida = { error: arrEsNumeros(arr), promedio: 0 };
  if (objSalida.error !== undefined) return objSalida;

  // for (let elem of arr) objSalida.promedio += elem;

  // objSalida.promedio = arr.reduce((a, b) => a + b, 0);
  // objSalida.promedio /= arr.length;
  objSalida.promedio = arr.reduce((total, elem, indice, arr) => {
    total += elem;
    if (indice === arr.length - 1) {
      return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
    } else {
      return total;
    }
  });

  objSalida.promedio = arr.reduce((total, elem, indice, arr) => {
    total += elem;
    if (indice === arr.length - 1) {
      return total / arr.length;
    } else {
      return total;
    }
  });
  return objSalida;
};

//console.log(avgArr([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validaIMDB(id);
    this.validaTitulo(titulo);
    this.validaDirector(director);
  }

  validarCadena(atributo, valCadena) {
    let error = undefined;
    if (!valCadena)
      error = `El atributo " ${atributo} " está vacio o indefinido.`;
    if (error === undefined && typeof valCadena !== "string")
      error = `${atributo}: " ${valCadena} " ingresado, NO es una cadena de texto`;
    return error;
  }
  validarCadenaLength(atributo, valCadena, minLength = 0, maxLength = 0) {
    let error = this.validarCadena(atributo, valCadena);
    if (error === undefined) {
      if (valCadena.length < minLength)
        error = `Atributo ${atributo}: " ${valCadena} " no cumple con ${minLength} caracteres mínimos`;
      if (error === undefined && valCadena.length > maxLength)
        error = `Atributo ${atributo}: " ${valCadena} ", excede de ${maxLength} caracteres permitidos.`;
    }
    return error;
  }
  validarNumero(atributo, valCadena) {
    let error = undefined;
    if (!valCadena)
      error = `El atributo " ${atributo} " está vacio o indefinido.`;
    if (error === undefined && typeof valCadena !== "number")
      error = `${atributo}: ${valCadena} ingresado, NO es un número`;
    return error;
  }
  validarArray(atributo, valArr) {
    let error = undefined;
    if (valArr === undefined)
      error = `El arreglo " ${atributo} " NO está definido.`;
    if (error === undefined && !arr instanceof Array)
      error = `${atributo}: ${valCadena} ingresado no es un Arreglo`;
    if (error === undefined && arr.length === 0)
      error = `El Arrglo ${atributo}: ${valCadena}, esta vacio.`;
    return error;
  }
  validaIMDB(id) {
    const attValido = { error: this.validarCadena("IMDB id", id) };
    if (attValido.error === undefined) {
      if (!/^([a-z]{2}([0-9]){7})$/.test(id)) {
        attValido.error = `IMDB id ${id} no valido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números`;
        console.log(attValido.error);
      }
    } else {
      console.log(attValido.error);
    }
  }
  validaTitulo(titulo) {
    const attValido = {
      error: this.validarCadenaLength("Título", titulo, 0, 100),
    };
    if (attValido.error !== undefined) console.log(attValido.error);
  }
  validaDirector(director) {
    const attValido = {
      error: this.validarCadenaLength("Director", director, 0, 50),
    };
    if (attValido.error !== undefined) console.log(attValido.error);
  }
}

const pelis = new Pelicula({
  id: "tt0345034",
  titulo:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga temporibus quos suscipit, a laudantiua",
  director: "Leonel Villa Vintimilla",
});
console.log(pelis.titulo.length);
