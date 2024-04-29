// export default class LvUtil{
export class LvUtil {
  static NDEC = 2;
  static MESES = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ];
  static DIAS = [
    "DOMINGO",
    "LUNES",
    "MARTES",
    "MIERCOLES",
    "JUEVES",
    "VIERNES",
    "SABADO",
  ];
  /**
   * VARIABLE CONVERTIDA A TEXTO
   * Si es un número convierte a texto,
   * si es undefined, null retorna '', objeto o Array retorna ''
   * si es un texto retorna sin espacios al inicio ni al final, conserva espacios intermedios
   * @param {*} texto variable a ser convertida
   * @returns Texto modificado
   */
  static strValToString(texto = "") {
    if (
      typeof texto == "object" ||
      typeof texto.prototype == "object" ||
      texto == undefined ||
      texto == null
    ) {
      texto = "";
    }
    if (typeof texto === "string" || typeof texto === "number") {
      if (typeof texto === "number") {
        texto = texto.toString().trim();
      }
    }
    return texto;
  }
  /**
   * Es factible convertir a entero, solo contiene numeros y signo negativo
   * @param {*} valor string o number
   * @returns boolean
   */
  static numEnteroValido(valor) {
    var RE = /^-?\d+$/;
    valor = this.strValToString(valor);
    if (typeof valor === "string" && valor !== "") {
      return RE.test(valor) ? true : false;
    }
    return false;
  }
  /**
   * Es factible el formato de fecha recibido, dd/mm/yyyy o dd-mm-yyyy
   * @param {*} valor string
   * @returns boolean Si no es factible o si valor es '' retorna false
   */
  static dtFechaValido(valor = "") {
    valor = this.strValToString(valor);
    let ExpRegFecha =
      /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/-](?:0?[1-9]|1[0-2])|(?:29|30)[/-](?:0?[13-9]|1[0-2])|31[/-](?:0?[13578]|1[02]))[/-](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/-]0?2[/-](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    if (typeof valor === "string" && valor !== "") {
      // return (new Date(valor)).getTime();
      return ExpRegFecha.test(valor) ? true : false;
    }
    return false;
  }
  static dtFechaValida(valor = "") {
    valor = this.strValToString(valor);
    let ExpRegFecha =
      /^(?:[1-4][\d]{3})[\/\-\.](?:0?[1-9]|1[0-2])[\/\-\.](?:0?[\d]|[1-2][\d]|3[0-1])$/;
    if (typeof valor === "string" && valor !== "") {
      // return (new Date(valor)).getTime();
      valor = valor.replace(".", "-");
      let fecha = new Date(valor);
      return ExpRegFecha.test(valor) ? true : false;
    }
    return false;
  }
  static strPassword(valor = "") {
    valor = this.strValToString(valor);
    let regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[#$%&@!*+-_:?\\/~])(?!\s)[a-zA-Z\d#$%&@!*+-_:?\\/~]{8,16}$/;
    if (regExp.test(value)) {
      return valor;
    } else {
      return false;
    }
  }
  /**
   * Cambiar formato de fecha desde dd-mm-yyyy hacia yyyy-mm-dd
   * @param {*} valor string fecha en formato dd-mm-yyyy
   * @returns String fecha en formato yyyy-mm-dd, Si no es factible o si valor es '' retorna la fecha presente
   */
  static dt_dmy_To_ymd(valor = "") {
    if (this.dtFechaValido(valor)) {
      return (
        this.strSubstring(valor, 6, 10) +
        "-" +
        this.strSubstring(valor, 3, 5) +
        "-" +
        this.strSubstring(valor, 0, 2)
      );
    } else {
      return this.dtEsFecha("ymd", 0, new Date(), "-");
    }
  }
  /**
   * Cambiar formato de fecha desde yyyy-mm-dd hacia dd-mm-yyyy
   * @param {*} valor string fecha en formato yyyy-mm-dd
   * @returns String fecha en formato dd-mm-yyyy, Si no es factible o si valor es '' retorna la fecha presente
   */
  static dt_ymd_To_dmy(valor = "") {
    if (valor.length == 10) {
      valor =
        this.strSubstring(valor, 8, 10) +
        "-" +
        this.strSubstring(valor, 5, 7) +
        "-" +
        this.strSubstring(valor, 0, 4);
      return valor;
    } else {
      return this.dtEsFecha("dmy", 0, new Date(), "-");
    }
  }
  /**
   * VARIABLE CONVERTIDA A NUMERO ENTERO
   * Si es un texto convierte a número entero,
   * si es undefined, null retorna '', objeto o Array retorna 0
   * si es factible convertir a entero *|-
   * @param {*} numval variable a ser convertida Number o String
   * @returns Entero retornado o 0 en caso de error
   */
  static numInt(numval = 0) {
    numval = this.strValToString(numval);
    if (this.numEnteroValido(numval) && numval !== "") {
      return parseInt(numval);
    } else {
      console.error(
        `Método L2v2Util.numValInt no recibe un número "${numval}", se retorna un 0`
      );
    }
    return 0;
  }
  /**
   * Es factible convertir a flotante, solo contiene numeros separados por . opcional
   * @param {*} valor string o number
   * @returns boolean
   */
  static numDecimalValido(valor) {
    var RE = /^-?\d*\.?\d*$/;
    valor = this.strValToString(valor);
    if (typeof valor === "string" && valor !== "" && valor !== ".") {
      return RE.test(valor) ? true : false;
    }
    return false;
  }
  /**
   * VARIABLE CONVERTIDA A NUMERO FLOTANTE     *
   * si es undefined, null retorna '', objeto o Array retorna 0 y console.error
   * Si es factible convertir a flotante lo convierte, sino retorna 0 y console.error
   * @param {*} numval Number o String, string o float
   * @returns Float
   */
  static numFloat(numval = "0") {
    numval = this.strValToString(numval);
    if (this.numDecimalValido(numval)) {
      return parseFloat(numval);
    } else {
      console.error(
        `Método L2v2Util.numValFloat no recibe un número "${numval}", se retorna un 0`
      );
      return parseFloat(0);
    }
  }
  /**
   * Generar un valor redondeado a NDEC cifras significativas
   * @param {*} valor Un valor representativo de numero decimal Number o String
   * @returns String aplica funcion Number.toFixed
   */
  static numFixed(valor = 0, ndec = this.NDEC) {
    return this.numFloat(valor).toFixed(ndec);
  }
  /**
   * EQUIVALENTE A FUNCION length de String
   * Retorna 0 si el parámetro es undefined, null, vacio, objeto o array
   * caso contrario retorna la longitud del texto o la cantidad
   * de dígitos en caso de ser numérico lo consultado.
   * Sin espacios al inicio y al final de la cadena, osea si pasa ' ' retorna 0
   * Dependencia de funcion this.strValToString
   * @param {*} texto por omision será ''
   * @returns int longitud de la cadena
   */
  static strLen(texto = "") {
    texto = this.strValToString(texto);
    if (typeof texto === "string") {
      return texto.length;
    }
    console.warn(`Método L2v2Util.strLen recibe cadena vacia \'\'`);
    return 0;
  }
  /*
    len = (texto='') => {
        texto = this.strValToString(texto);
        if (!texto) console.log(`Método L2v2Util.strLen recibe cadena vacia \'\'`);
        return texto.length;
    };
    */

  /**
   * EQUIVALENTE A LA FUNCION substring
   * @param {*} texto String
   * @param {*} ini integer valor de inicio de la cadena a recortar
   * @param {*} fin integer valor del ultimo elemento de la cadena a recortar
   * @returns String
   */
  static strSubstring(texto = "", ini = 0, fin = undefined) {
    texto = this.strValToString(texto);
    if (!texto) {
      console.warn(`Método L2v2Util.strSubstring recibe cadena vacia \'\'`);
    }
    return texto.slice(ini, fin);
  }

  /**
   * EQUIVALENTE A LA FUNCION lpad
   * @param {*} texto String cadena a considerar
   * @param {*} len int pos omision es 0
   * @param {*} caracter String por omision es '0'
   * @returns String resultante
   */
  static strLpad(texto = "", len = undefined, caracter = "0") {
    texto = this.strValToString(texto);
    caracter = this.strValToString(caracter);
    if (!texto) {
      console.warn(`Método L2v2Util.strLpad recibe cadena vacia \'\'`);
      return "";
    }
    if (Math.sign(len) === undefined) {
      console.error(
        `Método L2v2Util.strLpad cantidad de caracteres resultantes no fue definido. `
      );
      return "";
    }
    if (Math.sign(len) === -1) {
      console.error(
        `Método L2v2Util.strLpad cantidad de caracteres resultantes, definido como negativo.`
      );
      return "";
    }
    if (len === 0) {
      console.error(
        `Método L2v2Util.strLpad cantidad de caracteres resultantes, definido como cero.`
      );
      return "";
    }
    if (caracter === "") {
      console.error(
        `Método L2v2Util.strRpad caracter para rellenar no puede ser \'\'`
      );
      return "";
    }
    return texto.padStart(len, caracter);
  }
  /**
   * EQUIVALENTE A LA FUNCION rpad, rellena caracteres por la derecha
   * @param {*} texto String cadena a considerar
   * @param {*} len int por omision es undefined cantidad de caracteres resultantes
   * @param {*} caracter String por omision es '0' caracter de relleno
   * @returns String resultante
   */
  static strRpad(texto = "", len = undefined, caracter = "0") {
    texto = this.strValToString(texto).trim();
    caracter = this.strValToString(caracter);
    if (!texto) {
      console.warn(`Método L2v2Util.strRpad recibe cadena vacia \'\'`);
      return "";
    }
    if (Math.sign(len) === undefined) {
      console.error(
        `Método L2v2Util.strRpad cantidad de caracteres resultantes no fue definido. `
      );
      return "";
    }
    if (Math.sign(len) === -1) {
      console.error(
        `Método L2v2Util.strRpad cantidad de caracteres resultantes, definido como negativo.`
      );
      return "";
    }
    if (len === 0) {
      console.error(
        `Método L2v2Util.strRpad cantidad de caracteres resultantes, definido como cero.`
      );
      return "";
    }
    if (caracter === "") {
      console.error(
        `Método L2v2Util.strRpad caracteres para rellenar no puede ser \'\'`
      );
      return "";
    }
    return texto.padEnd(len, caracter);
  }
  /**
   * Invertir una cadena de texto
   * @param {*} texto String cadena a considerar
   * @returns String resultante cadena invertida
   */
  static strInvertirCadena(texto = "") {
    texto = this.strValToString(texto);
    if (!texto) {
      console.warn(
        `Método L2v2Util.strInvertirCadena recibe cadena vacia \'\'`
      );
      return "";
    }
    return texto.split("").reverse().join("");
  }
  /**
   * Contar cuantas veces se repite un texto en una frase
   * @param {*} frase String Parrafo donde se buscara si existe el texto
   * @param {*} texto String Palabra o cadena que se buscara en el parrafo
   * @returns int cantidad de veces que se repite el texto en la frase
   */
  static strBuscaTextoEnFrase(frase = "", texto = "") {
    frase = this.strValToString(frase);
    texto = this.strValToString(texto);
    if (!frase) {
      console.warn(
        `Método L2v2Util.strBuscaTextoEnFrase recibe frase vacia \'\'`
      );
      return 0;
    }
    if (!texto) {
      console.warn(
        `Método L2v2Util.strBuscaTextoEnFrase recibe texto a buscar vacia \'\'`
      );
      return 0;
    }
    let i = 0,
      contador = 0;
    while (i !== -1) {
      i = frase.indexOf(texto, i);
      if (i !== -1) {
        i++;
        contador++;
      }
    }
    return contador;
  }
  /**
   * Eliminar un patron de una frase o palabra
   * @param {*} frase String parrafo donde se buscara el texto o patron a eliminar
   * @param {*} texto String palabra o patron que se buscara y eliminara del parrafo
   * @returns String Nuevo parrafo con el texto patron eliminado
   */
  static strEliminarTextoEnFrase(frase = "", texto = "") {
    frase = this.strValToString(frase);
    texto = this.strValToString(texto);
    if (!frase) {
      console.warn(
        `Método L2v2Util.strEliminarTextoEnFrase recibe frase vacia \'\'`
      );
      return "";
    }
    if (!texto) {
      console.warn(
        `Método L2v2Util.strEliminarTextoEnFrase recibe texto patron a eliminar vacio \'\'`
      );
      return "";
    }
    return frase.replace(new RegExp(texto, "ig"), "");
  }
  /**
   * Array de palabras contenidas en un String o un dato numérico
   * Dependencia de funcion this.strValToString
   * @param {*} texto Frase o conjunto de palabras
   * @param {*} separador Caracter a considerar como separador de palabras
   * @returns Arreglo de cada palabra considerada, incluye elementos vacios o ''
   */
  static strSeparaFrase(texto = "", separador = ",") {
    texto = this.strValToString(texto);
    separador = this.strValToString(separador);
    if (typeof texto === "string" && typeof separador === "string") {
      let palabras = texto.split(separador);
      palabras.forEach((elemento, indice) => {
        palabras[indice] = elemento.trim();
      });
      return palabras;
    }
    console.warn(
      "Método L2v2Util.strSeparaFrase recibe cadena y/o separador vacia ''"
    );
    return [];
  }
  /**
   * Frase de texto con solo un espacio entre palabra y palabra
   * Si es un número lo transforma a texto previamente.
   * Si es un object, array, undefined o null retorna ''
   * Dependencia de funcion this.strSeparaFrase
   * @param {*} texto Frase o conjunto de palabras de tipo String preferentemente
   * @returns String solo con un espacio entre palabra y palabra
   */
  static strUnEspacio(texto = "") {
    let palabras = this.strSeparaFrase(texto, " ");
    let salida = "";
    palabras.forEach((elemento, indice) => {
      if (elemento != "") {
        if (
          elemento == "," ||
          elemento == ";" ||
          elemento == ":" ||
          elemento == "."
        ) {
          salida = salida.trim();
        }
        salida += elemento + " ";
      }
    });
    return salida;
  }
  /**
   * Eliminar espacios
   * Frase de texto sin espacio entre palabra y palabra
   * Si es un número lo transforma a texto previamente.
   * Si es un object, array, undefined o null retorna ''
   * Dependencia de funcion this.strSeparaFrase
   * @param {*} texto Frase o conjunto de palabras de tipo String preferentemente
   * @returns String sin espacios entre palabra y palabra
   */
  static strSinEspacio(texto = "") {
    let palabras = this.strSeparaFrase(texto, " ");
    let salida = "";
    palabras.forEach((elemento, indice) => {
      salida += elemento.trim();
    });
    return salida;
  }
  /**
   * Busca una palabra dentro de una frase
   * Separa la frase en palabras dentro de array
   * Dependencia de funcion this.strSeparaFrase
   * Dependencia de funcion this.strValToString
   * @param {*} frase Conjuntos de palabras separadas por comas
   * @param {*} palabra palabra a ser buscada
   * @returns retorna 1 si la encuentra, si frase o palabra son '' retorna 0
   * o si palabra no se encuentra en frase
   */
  static strBuscarEnFrase(frase = "", palabra = "") {
    let words = this.strSeparaFrase(frase, ",");
    palabra = this.strValToString(palabra);
    let salida = 0;
    // console.log(words);
    words.forEach((elemento, indice) => {
      if (palabra == elemento.trim()) {
        salida = 1;
      }
    });
    if (frase == "" || palabra == "") {
      salida = 0;
    }
    return salida;
  }
  /**
   * <strong>SOLO NÚMEROS</strong><br>
   * Retorna verdadero si el argumento contiene solo caracteres numéricos
   * dependencia de los métodos this.strValToString
   * @param {*} argumento String
   * @returns Booleano
   */
  static strSoloNumeros(argumento = "") {
    argumento = this.strValToString(argumento);
    let expRegSoloNumeros = "^[0-9]+$";
    if (argumento.match(expRegSoloNumeros) != null) {
      return true;
    }
    return false;
  }
  /**
   * <strong>LETRAS CON ESPACIADO NOMBRES Y APELLIDOS</strong><br>
   * Retorna verdadero si el argumento contiene solo caracteres numéricos
   * dependencia de los métodos this.strValToString
   * @param {*} argumento String
   * @returns  Booleano
   */
  static strSoloLetraSpace(argumento = "") {
    argumento = this.strValToString(argumento);
    argumento = argumento.trim();
    let expRegSoloLetras = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";
    if (argumento.match(expRegSoloLetras) != null) {
      return true;
    }
    console.warn("Método L2v2Util.strSoloLetraSpace recibe cadena vacia ''");
    return false;
  }
  /**
   * <strong>NOMBRES Y/O APELLIDOS VALIDADOS</strong><br>
   * Dado un String establece como string solo con un espacio y contiene
   * solo letras que conformen un nombres o apellidos
   * Dependencia de los métodos this.strValToString, this.strUnEspacio y de strSoloLetraSpace
   * @param {*} argumento String
   * @returns String del nombre en mayusculas o '' en caso de no ser un nombre o apellido.
   */
  static strNomApelValido(argumento = "") {
    argumento = this.strValToString(argumento);
    argumento = this.strUnEspacio(argumento).trim();
    if (!this.strSoloLetraSpace(argumento)) {
      console.warn(
        "Método L2v2Util.strNomApelValido recibe cadena vacia '' o no tiene forma de nombre o apellido"
      );
      argumento = "";
    }
    return argumento.toUpperCase();
  }
  /**
   * <strong>VALIDACION EMAIL</strong><br>
   * dependencia de los métodos this.strValToString
   * @param {*} argumento String
   * @returns Booleano
   */
  static strEsEmail(argumento = "") {
    argumento = this.strValToString(argumento).trim();
    let ExpRegEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    //Evaluación de Cadena Valida de Email
    //        if(argumento.match(ExpRegEmail) != null){
    //            return true;
    //        }
    return ExpRegEmail.test(argumento.toLowerCase().trim());
    //return false;
  }
  /**
   * <strong>EMAIL VALIDADO</strong><br>
   * Dado un ARGUMENTO establece como string, chequea si es un email valido
   * y retorna, en caso de no ser email valido retorna ''
   * dependencia de los métodos this.strValToString y this.strEsEmail
   * @param {*} argumento String
   * @returns String del email en minusculas o '' en caso de no ser una dirección de email.
   */
  static strEmailValido(argumento = "") {
    argumento = this.strValToString(argumento).trim();
    if (!this.strEsEmail(argumento)) {
      console.warn(
        "Método L2v2Util.strEmailValido recibe cadena vacia '' o no tiene formato de dirección de correo electrónico"
      );
      argumento = "";
    }
    return argumento.toLowerCase().trim();
  }
  /**
   * Generar un numero de cedula valido al azar
   * @param {*} provincia opcional debe contener el codigo de provincia o no registrarlo
   * @returns Un número de cédula válido al azar 10 caracteres
   */
  static fcGeneraNumeroCedula(provincia = undefined) {
    let maxprov = 24;
    let d3 = -1,
      d3prv;
    if (
      provincia === undefined ||
      !this.numEnteroValido(provincia) ||
      provincia > maxprov
    ) {
      provincia = this.numRand(1, maxprov);
      console.log("codigo provincia: ", provincia);
    }
    provincia = this.numInt(provincia);
    provincia = (provincia <= 9 ? "0" : "") + provincia;
    d3prv = this.numRand(1, 7);
    if (d3prv <= 5) {
      d3 = this.numRand(0, 5);
    } else {
      d3 = d3prv + 1;
    }
    provincia =
      provincia + "" + d3 + "" + this.strLpad(this.numRand(1, 999999), 6, "0");
    provincia = provincia + this.fcMod10(provincia);
    return provincia;
  }
  /**
   * Generar un número de ruc válido al azar
   * @param {*} provincia opcional debe contener el código de provincia o no registrar para generar al azar la provincia
   * @param {*} d3 opcional, debe contener valores de 6 o 9 u obviar para generar al azar
   * @returns String de un número válido de ruc al azar de 13 caracteres
   */
  static fcGeneraNumeroRuc(provincia = undefined, d3 = undefined) {
    let maxprov = 24;
    let d3prv;
    let regDig3 = /6|9/;
    if (
      provincia === undefined ||
      !this.numEnteroValido(provincia) ||
      provincia > maxprov
    ) {
      provincia = this.numRand(1, maxprov);
      console.log("codigo provincia: ", provincia);
    }
    provincia = this.numInt(provincia);
    provincia = (provincia <= 9 ? "0" : "") + provincia;
    if (d3 === undefined || !regDig3.test(d3)) {
      d3prv = this.numRand(1, 2);
      if (d3prv == 1) d3 = 6;
      else d3 = 9;
    }
    if (d3 == 6) {
      provincia =
        provincia + "" + d3 + "" + this.strLpad(this.numRand(1, 99999), 5, "0");
      provincia = provincia + this.fcMod11(provincia) + "0001";
    } else {
      provincia =
        provincia +
        "" +
        d3 +
        "" +
        this.strLpad(this.numRand(1, 999999), 6, "0");
      provincia = provincia + this.fcMod11(provincia) + "001";
    }
    return provincia;
  }
  /**
   * MODULO 11
   * <strong>DIGITO VALIDADOR BASADO EN MOD11</strong><br>
   * Funcion que determina el digito validador de una secuencia numérica basado en el
   * algoritmo de módulo 11.
   * @param {*} argumento de tipo String
   * @returns int del digito verificador o -1 en caso de existir inconsistencia
   */
  static fcMod11(argumento = "") {
    let retorna = -1;
    let factorCheck = 0; // Valor inicial de control oscila entre 7 y 2
    let largoDato = 0; // Longitud del dato a obtener el validador
    let pivote = 0; // posicion analizada
    let caracter; // digito analizado
    let suma = 0;
    argumento = this.strValToString(argumento);
    largoDato = this.strLen(argumento);
    if (largoDato == 0) {
      console.warn("Método L2v2Util.fcMod11 recibe cadena vacia ''");
      return retorna;
    }
    factorCheck = largoDato % 6 == 0 ? 7 : (largoDato % 6) + 1;
    if (largoDato > 0 && this.strSoloNumeros(argumento)) {
      while (pivote < largoDato) {
        caracter = argumento.substring(pivote, pivote + 1);
        factorCheck = factorCheck < 2 ? 7 : factorCheck;
        suma = suma + factorCheck * parseInt(caracter, 10);
        factorCheck = factorCheck - 1;
        pivote++;
      }
      retorna = 11 - (suma % 11);
      retorna = retorna == 11 ? 0 : retorna == 10 ? 1 : retorna;
    }
    if (retorna == -1) {
      console.warn("Método L2v2Util.fcMod11 retorna '-1', error en funcion");
    }
    return retorna;
  }
  /**
   * MODULO 10
   * Funcion que determina el digito validador de una secuencia numérica basado en el
   * algoritmo de módulo 10.
   * @param {*} argumento de tipo String
   * @returns int del digito verificador o -1 en caso de existir inconsistencia
   */
  static fcMod10(argumento = "") {
    let retorna = -1;
    let factorCheck = 0; // Valor inicial de control oscila entre 7 y 2
    let largoDato = 0; // Longitud del dato a obtener el validador
    let pivote = 0; // posicion analizada
    let caracter; // digito analizado
    let suma = 0;
    largoDato = this.strLen(argumento);
    factorCheck = largoDato % 2 == 0 ? 1 : (largoDato % 2) + 1;
    if (largoDato > 0 && this.strSoloNumeros(argumento)) {
      while (pivote < largoDato) {
        caracter = argumento.substring(pivote, pivote + 1);
        factorCheck = factorCheck < 1 ? 2 : factorCheck;
        suma =
          suma +
          (factorCheck * Number.parseInt(caracter, 10) > 9
            ? factorCheck * Number.parseInt(caracter, 10) - 9
            : factorCheck * Number.parseInt(caracter, 10));
        factorCheck--;
        pivote++;
      }
      retorna = 10 - (suma % 10);
      retorna = retorna == 10 ? 0 : retorna;
    }
    if (retorna == -1) {
      console.warn("Método L2v2Util.fcMod10 retorna '-1', error en funcion");
    }
    return retorna;
  }

  /**
   * Funcion que retora el valor booleano true si lo recibido en ced corresponde
   * a un número de cédula valido, caso contrario retorna false.<br>
   * Si length de ced no es 10 o si contiene algun caracter diferente de numero o si el tercer caracter es 6 o 9 return false.
   * Depende de la funcion this.fcMod10, this.strSoloNumeros, this.strBuscarEnFrase
   * @param {*} ced Generalmente string
   * @returns valor booleano
   */
  static fcEsCed(ced = "") {
    let _esCed = false;
    /* prov: Provincia emisora de la ced >= 1 y <= 24, primeros dos digitos;
     * d10: decimo o noveno digito del ruc, dependen de d3;
     * d3: Tercer digito del ruc o tipo de ruc;
     * Parte: del ruc que se considera cedula cuando d3 es < 6 */
    let prov = "";
    let d10 = 0,
      d3 = 0,
      d10get = 0;
    ced = this.strValToString(ced);
    if (
      this.strLen(ced) != 10 ||
      this.strSoloNumeros(ced) == false ||
      this.strBuscarEnFrase(ced.substring(2, 3), "6,9")
    ) {
      return _esCed;
    } else {
      d10 = Number.parseInt(ced.substring(9, 10), 10);
      prov = ced.substring(0, 2);
      d3 = Number.parseInt(ced.substring(2, 3), 10);
      d10get = this.fcMod10(ced.substring(0, 9));
      if (d10get != -1 && d10get == d10) _esCed = true;
      if (
        Number.parseInt(prov, 10) < 1 ||
        Number.parseInt(prov, 10) > 24 ||
        d3 > 6
      ) {
        console.warn(
          `Método L2v2Util.fcEsCed genero un valor de false, ${ced} no es cédula válida`
        );
        _esCed = false;
      }
    }
    return _esCed;
  }
  /**
   * Establecer si un ruc es juridico o no, es decir que su longitud sea 13 caracteres y que contenga
   * en la tercera posicion el digito 6 o el 9 y sea un ruc valido
   * @param cedruc String de ruc
   * @returns true en caso de ser ruc juridico caso contrario false
   */
  static fcEsJuridico(cedruc = "") {
    cedruc = this.strValToString(cedruc);
    if (this.strLen(cedruc) >= 10) {
      cedruc = cedruc.trim();
      let char3 = cedruc.substring(2, 3);
      console.log(char3);
      if (
        this.strBuscarEnFrase(char3, "6,9") &&
        this.strLen(cedruc) == 13 &&
        this.fcEsRuc(cedruc)
      ) {
        return true;
      }
    }
    console.warn(
      `Método L2v2Util.fcEsJuridico genero un valor de false, "${cedruc}" no es cédula o Ruc Jurídico`
    );
    return false;
  }
  /**
   * Retorna true si es un número de ruc válido, caso contrario retorna false
   * Depende de las funciones fcEsCed y de la funcion fcMod11
   * @param ruc String que representa un numero de ruc
   * @returns String que puede ser "" o el ruc si es que es ruc
   */
  static fcEsRuc(ruc = "") {
    /* prov: Provincia emisora del ruc >= 1 y <= 24;
     * d10: decimo o noveno digito del ruc, dependen de d3;
     * d3: Tercer digito del ruc o tipo de ruc;
     * Parte: del ruc que se considera cedula cuando d3 es < 6 */
    ruc = this.strValToString(ruc);
    let prov = "",
      d10 = "",
      d3 = "",
      ced = "",
      dfinal = "001";
    let d10get = 0;

    if (this.strLen(ruc) != 13 || !this.strSoloNumeros(ruc)) {
      /*Si el ruc contiene menos de 13 digitos o si contiene un caracter diferente de numero */
      console.warn(
        "Método L2v2Util.fcEsRuc genero un valor de false, diferente de 13 caracteres"
      );
      return false;
    } else if (ruc == "9999999999999") {
      return true;
    } else {
      d3 = ruc.substring(2, 3);
      prov = ruc.substring(0, 2);
      if (
        d3 == "9" ||
        (Number.parseInt(d3, 10) < 6 && Number.parseInt(d3, 10) >= 0)
      ) {
        /*Ruc de personas juridicas o extranjeros con cedula o de personas naturales con cedula*/
        ced = ruc.substring(0, 10);
        d10 = ced.substring(9);
        dfinal = ruc.substring(10, 10 + 3);
        if (Number.parseInt(d3, 10) < 6) {
          if (this.fcEsCed(ced) && dfinal == "001") return true;
        } else {
          d10get = this.fcMod11(ced.substring(0, 9));
          if (
            d10get != -1 &&
            d10get == parseInt(d10, 10) &&
            parseInt(prov, 10) > 0 &&
            Number.parseInt(prov, 10) <= 24 &&
            dfinal != "000"
          ) {
            return true;
          }
        }
      }
      if (Number.parseInt(d3, 10) == 6) {
        /* Ruc para entidades públicas */
        ced = ruc.substring(0, 9);
        d10 = ced.substring(8, 9);
        dfinal = ruc.substring(9, 9 + 4);
        d10get = this.fcMod11(ced.substring(0, 8));
        if (
          d10get != -1 &&
          d10get == Number.parseInt(d10, 10) &&
          Number.parseInt(prov, 10) > 0 &&
          Number.parseInt(prov, 10) <= 24 &&
          dfinal != "0000"
        ) {
          return true;
        }
      }
    }
    console.warn(
      `Método L2v2Util.fcEsRuc genero un valor de false, "${ruc}" no es número de RUC válido`
    );
    return false;
  }
  /**
   * Funcion que retorna la fecha y hora separado por un espacio. Ej. 2023-01-24 17:09:04
   * @param {*} formato String formato de salida obligatorio 'ymd', 'dmy', 'mdy' por omision 'ymd', para sri es formato 'dmy-sri', aplica casos con extend, ej. dmy-extend
   * @param {*} conHora 0 obviar hora, 1 y 3 solo hora formato hh:mm:ss o hhmmss, 2 y 4 fecha y hora con formato 2 respecto a 1 y 4 respecto a 3
   * @param {*} fecha Si se establece entonces debe ser año-mes-dia como String, '' o un objeto Date()
   * @param {*} separa Separar entre uno y otro dato de fecha por omision es el '-'
   * @returns Fecha y hora o solo fecha o solo hora.
   */
  static dtEsFecha(
    formato = "ymd",
    conHora = 0,
    fecha = new Date(),
    separa = "-"
  ) {
    let today = new Date(),
      hora = "",
      fechaFormat = "";
    let hh = "",
      m = "",
      ss = "",
      yy = "",
      mm = "",
      dd = "",
      nomdia = "",
      nommes = "";
    let ahora = new Date();
    let regExpFormat = /^(?:[dmy]{3})([-]{1}(?:extend|sri))?$/;
    let regExpForHora = /^(?:[0-4]{1})?$/;
    let regExpSepara = /^$|^[\/\-]{1}$/;
    separa = this.strValToString(separa);
    if (!regExpSepara.test(separa)) {
      console.warn(
        `*!*! Parámetro separador de fecha "${separa}" no puede ser diferente de / o de -, en el método LvUtil.dtEsFecha, por omisión se asigna el valor - `
      );
      separa = "-";
    }
    if (fecha instanceof Date) {
      today = fecha;
    } else {
      fecha = this.strValToString(fecha);
      if (this.dtFechaValida(fecha)) {
        today = new Date(fecha);
      } else {
        console.warn(
          `*!*! Parámetro fecha "${fecha}", formato de String debe ser "y/m/d, y-m-d" o es '', se parte de la fecha del SO cliente en el método LvUtil.dtEsFecha `
        );
        today = ahora;
      }
    }
    if (conHora > 0) {
      hh += (ahora.getHours() < 10 ? "0" : "") + ahora.getHours();
      m += (ahora.getMinutes() < 10 ? "0" : "") + ahora.getMinutes();
      ss += (ahora.getSeconds() < 10 ? "0" : "") + ahora.getSeconds();
      if (conHora >= 1 && conHora <= 2) {
        hora = hh + ":" + m + ":" + ss;
      } else {
        hora = hh + m + ss;
      }
    }
    yy += today.getFullYear();
    mm += (today.getMonth() < 9 ? "0" : "") + (today.getMonth() + 1);
    dd += (today.getDate() < 10 ? "0" : "") + today.getDate();
    nomdia = today.getDay();
    nommes = today.getMonth();
    formato = formato.toLowerCase();
    if (regExpFormat.test(formato)) {
      switch (formato) {
        case "dmy":
          fechaFormat = dd + separa + mm + separa + yy;
          break;
        case "dmy-sri":
          fechaFormat = dd + "" + mm + "" + yy;
          break;
        case "dmy-extend":
          fechaFormat =
            this.DIAS[nomdia] +
            " " +
            dd +
            " DE " +
            this.MESES[nommes] +
            " DE " +
            yy;
          break;
        case "ymd":
          fechaFormat = yy + separa + mm + separa + dd;
          break;
        case "ymd-extend":
          fechaFormat = yy + separa + this.MESES[nommes] + separa + dd;
          break;
        case "mdy":
          fechaFormat = mm + separa + dd + separa + yy;
          break;
        case "mdy-extend":
          fechaFormat = this.MESES[nommes] + " " + dd + " de " + yy;
          break;
        default:
          console.warn(
            `*!*! Parámetro formato para visualizar fecha ${fecha} indefinido, se usa dd-mm-yyyy, en método LvUtil.dtEsFecha `
          );
          fechaFormat = dd + separa + mm + separa + yy;
          break;
      }
      if (regExpForHora.test(conHora)) {
        switch (conHora) {
          case 0: // Retorna fecha formateada sin hora
            return fechaFormat;
            break;
          case 1: // Hora sin fecha Ej. 14:57:23
            return hora;
            break;
          case 2: // Fecha con hora ej. 14:57:23
            return fechaFormat + " " + hora;
            break;
          case 3: // hora sin fechas Ej.: 145723
            return hora;
            break;
          case 4: // Fecha con hora Ej.: 145723
            return fechaFormat + " " + hora;
            break;
        }
      } else {
        console.error(
          `ERROR: Parámetro conHora solo admite valores entre 0-4 para visualizar la fecha ${fecha} en método LvUtil.dtEsFecha `
        );
        return fechaFormat;
      }
    } else {
      console.error(
        `ERROR: Parámetro formato para visualizar fecha ${fecha} en método LvUtil.dtEsFecha `
      );
      return "";
    }
  }
  /**
   * Calcular el factorial de un número
   * @param {*} n int por omision es 0
   * @returns El factorial del número, si es cero o negativo el valor de n retorna 1
   */
  static numFactorial(n = 0) {
    if (Math.sign(n) <= 0) {
      console.error(
        `lvUtil.numFactorial failed, no se puede sacar el factorial a un valor negativo ni a cero, retorna un 0`
      );
      return 0;
    }
    if (n == 1) return 1;
    return n * this.numFactorial(n - 1);
  }
  /**
   * Retorna un número aleatorio entre min y max
   * @param {*} min int por omision es 0
   * @param {*} max int por omision es 0
   * @returns Número aleatorio entre min y max
   */
  static numRand(min = 0, max = 0) {
    if (min === 0) min = 0;
    if (max === 0) max = 1;
    let numrand = Math.round(Math.random() * (max - min) + min);
    console.info(`Número aleatorio entre ${min} y ${max} = ${numrand}`);
    return numrand;
  }
  /**
   * Numero es primo
   * @param {*} valor Number o String
   * @returns boolean
   */
  static numPrimo(valor) {
    valor = this.numInt(valor);
    if (abs(valor) === 1) return true;
    for (let i = 2; i < abs(valor); i++) {
      if (abs(valor) % i === 0) return false;
    }
    return true;
  }
  /**
   * Consultar si el numero es par o impar, si es par retorna true
   * @param {*} valor Number o String
   * @returns boolean
   */
  static numPar(valor) {
    valor = this.numInt(valor);
    if (abs(valor) % 2 === 0) return true;
    return false;
  }
  /**
   * Conversion de grados Celcius a Farengheit o de Farengheit a Celcius
   * @param {*} grados int grados celcius o farengheit, por omision es 0
   * @param {*} unidad String C o F unidad original, por omision es C
   * @returns int Resultado de la conversion
   */
  static numConvertirGrados(grados = 0, unidad = "C") {
    let convert = 0;
    grados = this.numInt(grados);
    unidad = this.strValToString(unidad);
    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) {
      console.error(
        `lvUtil.numConvertirGrados no se puede convertir grados debido a que unidad puede ser C o F unidacmente ${unidad}`
      );
      return 0;
    }
    if (unidad === "F") {
      convert = ((grados - 32) * 9) / 5;
      console.log(`" ${grados} °F " equivalen a " ${convert} °C "`);
    } else {
      convert = (5 / 9) * grados + 32;
      console.log(`" ${grados} °C " equivalen a " ${convert} °F "`);
    }
    return convert;
  }
  /**
   * Obtener la fecha del primer dia del año a partir de la fecha establecida
   * @param {*} valor String representativo de la fecha
   * @returns String fecha del primer dia del año
   */
  static dtDia1Anio(valor = "") {
    if (this.dtFechaValido(valor)) {
      let fecha = new Date(this.dt_dmy_To_ymd(valor));
      let anio = fecha.getFullYear();
      return "01/01/" + anio;
    }
    return "";
  }
  /**
   * Obtener la fecha del ultimo dia del año a partir de la fecha establecida
   * @param {*} valor String representativo de la fecha
   * @returns String fecha del último dia del año
   */
  static dtDia31Anio(valor = "") {
    if (this.dtFechaValido(valor)) {
      let fecha = new Date(this.dt_dmy_To_ymd(valor));
      let anio = fecha.getFullYear();
      return "31/12/" + anio;
    }
    return "";
  }
  /**
   * Reconocer un ano como bisiesto no bisiesto
   * @param {*} valor String representativo de la fecha
   * @returns Boolean true en caso de ser bisiesto, sino false
   */
  static dtAnioBisiesto(valor = "") {
    if (this.dtFechaValido(valor)) {
      let fecha = new Date(this.dt_dmy_To_ymd(valor));
      let anio = fecha.getFullYear();
      if (anio % 4 == 0 || anio % 100 == 0) {
        return true;
      }
    }
    return false;
  }
  /**
   * Obtener la fecha del primer dia del mes a partir de la fecha establecida
   * @param {*} valor String representativo de la fecha
   * @returns String fecha del primer dia del mes o '' en caso de no ser fecha
   */
  static dtDia1Mes(valor = "") {
    if (this.dtFechaValido(valor)) {
      let fecha = new Date(this.dt_dmy_To_ymd(valor));
      let anio = fecha.getFullYear();
      let mes = fecha.getMonth() + 1;
      return "01/" + (mes < 10 ? "0" : "") + mes + "/" + anio;
    }
    return "";
  }
  /**
   * Obtener la fecha del último dia del mes a partir de la fecha establecida
   * @param {*} valor String representativo de la fecha
   * @returns String fecha del último dia del mes
   */
  static dtDia31Mes(valor = "") {
    if (this.dtFechaValido(valor)) {
      let fecha = new Date(this.dt_dmy_To_ymd(valor));
      let anio = fecha.getFullYear();
      let mes = fecha.getMonth() + 1;
      let dia = "";
      if (mes === 2) {
        if (this.dtAnioBisiesto(valor)) {
          dia = "29";
        } else {
          dia = "28";
        }
      } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        dia = "30";
      } else {
        dia = "31";
      }
      return dia + "/" + (mes < 10 ? "0" : "") + mes + "/" + anio;
    }
    return "";
  }
  /**
   * Establecer si la fecha se encuentra en el rango de los primeros 20 dias del mes
   * @param {*} valor String representativo de la fecha
   * @returns Boolean
   */
  static dtDias1_20(valor = "") {
    if (this.dtFechaValido(valor)) {
      let fecha = new Date(this.dt_dmy_To_ymd(valor));
      let anio = fecha.getFullYear();
      let mes = fecha.getMonth() + 1;
      let dia = fecha.getDate();
      if (dia >= 1 && dia <= 20) {
        return true;
      }
    }
    return false;
  }
  /**
   * Obtener la cantidad de días que contiene el mes de la fecha consultada
   * @param {*} valor String representativo de la fecha
   * @returns int Cantidad de días que contiene el mes o -1 en caso de no fecha
   */
  static dtDiasDelMes(valor = "") {
    if (this.dtFechaValido(valor)) {
      let fecha = new Date(this.dt_dmy_To_ymd(valor));
      let anio = fecha.getFullYear();
      let mes = fecha.getMonth() + 1;
      let dia = 0;
      if (mes === 2) {
        if (this.dtAnioBisiesto(valor)) {
          dia = 29;
        } else {
          dia = 28;
        }
      } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        dia = 30;
      } else {
        dia = 31;
      }
      return dia;
    }
    return -1;
  }
  /**
   * Obtener la cantidad de días que contiene el año de la fecha consultada
   * @param {*} valor String representativo de la fecha
   * @returns int cantidad de días que contiene el año en caso de error -1
   */
  static dtDiasDelAnio(valor) {
    if (this.dtFechaValido(valor)) {
      if (this.dtAnioBisiesto(valor)) {
        return 366;
      }
      return 365;
    }
    return -1;
  }
  /**
   * Obtener la cantidad de días que han transcurrido en el año de la fecha consultada
   * @param {*} valor String representativo de la fecha
   * @returns int cantidad de días transcurridos o -1 en caso de error
   */
  static dtDiasPasaronDelAnio(valor = "") {
    if (this.dtFechaValido(valor)) {
      let dia1Anio = this.dtDia1Anio(valor);
      let f1 = new Date(this.dt_dmy_To_ymd(dia1Anio)).getTime();
      let f2 = new Date(this.dt_dmy_To_ymd(valor)).getTime();
      if (f2 > f1) {
        let f3 = f2 - f1;
        return f3 / (1000 * 60 * 60 * 24);
      }
    }
    return -1;
  }
  /**
   * Obtener la cantidad de días que faltan por transcurrir en el año de la fecha consultada
   * @param {*} valor String representativo de la fecha
   * @returns int cantidad de días faltan por transcurrir o -1 en caso de error
   */
  static dtDiasFaltanDelAnio(valor) {
    if (this.dtFechaValido(valor)) {
      let dia31Anio = this.dtDia31Anio(valor);
      let f1 = new Date(this.dt_dmy_To_ymd(valor)).getTime();
      let f2 = new Date(this.dt_dmy_To_ymd(dia31Anio)).getTime();
      if (f2 > f1) {
        let f3 = f2 - f1;
        return f3 / (1000 * 60 * 60 * 24);
      }
    }
    return -1;
  }
  /**
   * Obtener la cantidad de días para un intervalo de fechas, f2 debe ser mayor que f1
   * @param {*} f2 String formato dmy
   * @param {*} f1 String formato dmy
   * @returns Cantidad de dias desde f1 para llegar a f2
   */
  static dtDiasEntreFechas(f2, f1) {
    if (this.dtFechaValido(f2) && this.dtFechaValido(f1)) {
      let ff2 = new Date(this.dt_dmy_To_ymd(f2)),
        ff1 = new Date(this.dt_dmy_To_ymd(f1));
      if (ff2 > ff1) {
        let ff3 = ff2 - ff1;
        return ff3 / (1000 * 60 * 60 * 24);
      }
    }
    return -1;
  }
  /**
   * Sumar o restar un intervalo de tiempo a una fecha
   * @param {string} fecha STring de fecha en formato dd-mm-yyyy
   * @param {number} accion Number 1: Agregar, -1 Restar
   * @param {number} yy Number años
   * @param {number} m Number meses
   * @param {number} dd Number dias
   * @param {number} hh Number horas
   * @param {number} mm Number minutos
   * @param {number} ss Number segundos
   * @returns Objeto de tipo Date representativo de la operacion
   */
  static dtAddDelta(
    fecha,
    accion = -1,
    yy = 0,
    m = 0,
    dd = 0,
    hh = 0,
    mm = 0,
    ss = 0
  ) {
    let ff2 = "",
      mls = 1000;
    if (this.dtFechaValido(fecha)) {
      ff2 = new Date(this.dt_dmy_To_ymd(fecha));
    } else {
      ff2 = new Date();
    }
    console.log("ff2", ff2, ff2.getTime());
    mls =
      ff2.getTime() +
      accion *
        (yy * 31104000 + m * 2592000 + dd * 86400 + hh * 3600 + mm * 60 + ss) *
        mls;
    console.log(mls);
    mls = new Date(mls);
    console.log(mls);
    return mls;
  }
  /**
   * Amortizacion de prestamo mediante método frances.
   * Cuota fija (Capital * interes/(1-(1+interes)^(-numLetras))), se establece el Monto compuesto mc inicial
   * mc = (capital|saldoPrev) * (1 + interes)^(periodo); donde periodo es 1 dado por cada pago,
   * valInteres = mc - saldo previos, amortizacion = cuotaFija - valInteres,
   * nuevo saldo = saldo prev - amortizacion
   * @param {*} valorPrestamo Number valor del prestamo
   * @param {*} interes Number tasa de interes debe estar a la misma periodicidad que numLetras, si es mayor que 1, divide para 100
   * @param {*} numLetras Number cantidad de letras en que se paga el prestamo, debe estar a la misma periodicidad que el interes o tasa
   * @returns Number CuotaFija a pagar
   */
  static numMetodoFrances(
    valorPrestamo = undefined,
    interes = undefined,
    numLetras = undefined
  ) {
    let cuotaFija = 0;
    if (
      !this.numDecimalValido(valorPrestamo) ||
      !this.numDecimalValido(interes) ||
      !this.numEnteroValido(numLetras)
    ) {
      console.error(
        `Parámetro valorPrestamo = ${valorPrestamo} o interes = ${interes} o numLetras = ${numLetras} no es un valor numérico válido, retorna 0, método LvUtil.numMetodoAleman`
      );
      return 0;
    }
    valorPrestamo = this.numFloat(valorPrestamo);
    interes = this.numFloat(interes);
    numLetras = this.numInt(numLetras);
    let CuotasPagos = [];

    if (interes >= 1) {
      interes = interes / 100;
    }
    cuotaFija =
      (valorPrestamo * interes) / (1 - Math.pow(1 + interes, -1 * numLetras));
    let mc = 0;
    for (let i = 0; i <= numLetras; i++) {
      // Formula de monto compuesto es
      // mc = capital * (1 + interes)^(periodo); donde periodo es 1 dado por cada pago
      if (i == 0) {
        mc = valorPrestamo * (1 + interes);
        let tCuotaPago = new CuotaPresto(
          i,
          this.numFixed(valorPrestamo, this.NDEC),
          0,
          0,
          0,
          this.numFixed(this.numFloat(mc), this.NDEC)
        );
        CuotasPagos.push(tCuotaPago);
      } else {
        let amortizPrev = CuotasPagos.find(
          (CuotaPresto) => CuotaPresto.nCuota === i - 1
        );
        let valInteres =
          this.numFloat(amortizPrev.montoCompuestoSiguiente) -
          this.numFloat(amortizPrev.saldo);
        let saldo = this.numFloat(amortizPrev.saldo) - (cuotaFija - valInteres);
        mc = saldo * (1 + interes);
        let tCuotaPago = new CuotaPresto(
          i,
          this.numFixed(saldo, this.NDEC),
          this.numFixed(cuotaFija, this.NDEC),
          this.numFixed(valInteres, this.NDEC),
          this.numFixed(cuotaFija - valInteres, this.NDEC),
          this.numFixed(mc, this.NDEC)
        );
        CuotasPagos.push(tCuotaPago);
      }
    }
    if (CuotasPagos.length > 0) {
      let totAmortizacion = new CuotaPresto(
        "TOTALES",
        this.numFixed(valorPrestamo, this.NDEC),
        0,
        0,
        0,
        0
      );
      CuotasPagos.forEach((cp) => {
        totAmortizacion.pago += this.numFloat(cp.pago);
        totAmortizacion.valInteres += this.numFloat(cp.valInteres);
        totAmortizacion.amortizacion += this.numFloat(cp.amortizacion);
        console.log(cp.toString());
      });
      totAmortizacion.pago = this.numFixed(totAmortizacion.pago, this.NDEC);
      CuotasPagos.push(totAmortizacion);
      console.log(totAmortizacion.toString());
    }
    return this.numFixed(cuotaFija, this.NDEC);
  }
  /**
   * Amortización de prestamo mediante método alemán.
   * Amortizacion fija (capital/numLetras), establecer Monto compuesto mc inicial,
   * mc = (capital|saldoPrev) * (1 + interes)^(periodo); donde periodo es 1 dado por cada pago,
   * valInteres = mc - saldo previos, cuotaPago = amorizacionFija + valInteres,
   * nuevo saldo = saldo prev - amortizacionFija
   * @param {*} valorPrestamo Number valor del prestamo
   * @param {*} interes Number tasa de interes debe estar a la misma periodicidad que numLetras, si es mayor que 1, divide para 100
   * @param {*} numLetras Number cantidad de letras en que se paga el prestamo, debe estar a la misma periodicidad que el interes o tasa
   * @returns Number amortizacionFija cuotas variables a pagar
   */
  static numMetodoAleman(
    valorPrestamo = undefined,
    interes = undefined,
    numLetras = undefined
  ) {
    let amortizacionFija = 0;
    if (
      !this.numDecimalValido(valorPrestamo) ||
      !this.numDecimalValido(interes) ||
      !this.numEnteroValido(numLetras)
    ) {
      console.error(
        `Parámetro valorPrestamo = ${valorPrestamo} o interes = ${interes} o numLetras = ${numLetras} no es un valor numérico válido, retorna 0, método LvUtil.numMetodoAleman`
      );
      return 0;
    }
    valorPrestamo = this.numFloat(valorPrestamo);
    interes = this.numFloat(interes);
    numLetras = this.numInt(numLetras);
    let CuotasPagos = [];
    if (interes >= 1) {
      interes = interes / 100;
    }
    amortizacionFija = this.numFloat(
      this.numFixed(valorPrestamo / numLetras, this.NDEC)
    );
    if (valorPrestamo > amortizacionFija * numLetras) {
      amortizacionFija += 0.01;
    }
    let mc = 0;
    for (let i = 0; i <= numLetras; i++) {
      // Formula de monto compuesto es
      // mc = capital * (1 + interes)^(periodo); donde periodo es 1 dado por cada pago
      if (i == 0) {
        mc = valorPrestamo * (1 + interes);
        let tCuotaPago = new CuotaPresto(
          i,
          this.numFixed(valorPrestamo, this.NDEC),
          0,
          0,
          0,
          this.numFixed(this.numFloat(mc), this.NDEC)
        );
        CuotasPagos.push(tCuotaPago);
      } else {
        let amortizPrev = CuotasPagos.find(
          (CuotaPresto) => CuotaPresto.nCuota === i - 1
        );
        let valInteres =
          this.numFloat(amortizPrev.montoCompuestoSiguiente) -
          this.numFloat(amortizPrev.saldo);
        let saldo = this.numFloat(amortizPrev.saldo) - amortizacionFija;
        mc = saldo * (1 + interes);
        let tCuotaPago = new CuotaPresto(
          i,
          this.numFixed(saldo, this.NDEC),
          this.numFixed(amortizacionFija + valInteres, this.NDEC),
          this.numFixed(valInteres, this.NDEC),
          this.numFixed(amortizacionFija, this.NDEC),
          this.numFixed(mc, this.NDEC)
        );
        CuotasPagos.push(tCuotaPago);
      }
    }
    if (CuotasPagos.length > 0) {
      let totAmortizacion = new CuotaPresto(
        "TOTALES",
        this.numFixed(valorPrestamo, this.NDEC),
        0,
        0,
        0,
        0
      );
      CuotasPagos.forEach((cp) => {
        totAmortizacion.pago += this.numFloat(cp.pago);
        totAmortizacion.valInteres += this.numFloat(cp.valInteres);
        totAmortizacion.amortizacion += this.numFloat(cp.amortizacion);
        console.log(cp.toString());
      });
      totAmortizacion.pago = this.numFixed(totAmortizacion.pago, this.NDEC);
      CuotasPagos.push(totAmortizacion);
      console.log(totAmortizacion.toString());
    }
    // console.log(CuotasPagos);
    return this.numFixed(amortizacionFija, this.NDEC);
  }

  /**
   * Amortización de préstamo mediante método americano.
   * valInteres fijo (capital * interes), Monto compuesto mc = saldoprev no se usa es 0,
   * cuotaPago = valInteres desde la primera hasta la numLetras - 1 y en la ultima letra
   * es igual al capital + valInteres, amortizacion = 0 excepto en la ultima cuota que es Capital
   * nuevo saldo = saldo prev excepto en la ultima letra que es 0
   * @param {*} valorPrestamo Number valor del prestamo
   * @param {*} interes Number tasa de interes debe estar a la misma periodicidad que numLetras, si es mayor que 1, divide para 100
   * @param {*} numLetras Number cantidad de letras en que se paga el prestamo, debe estar a la misma periodicidad que el interes o tasa
   * @returns Number valInteresFijo cuotas variables a pagar
   */
  static numMetodoAmericano(
    valorPrestamo = undefined,
    interes = undefined,
    numLetras = undefined
  ) {
    let valInteresFijo = 0;
    if (
      !this.numDecimalValido(valorPrestamo) ||
      !this.numDecimalValido(interes) ||
      !this.numEnteroValido(numLetras)
    ) {
      console.error(
        `Parámetro valorPrestamo = ${valorPrestamo} o interes = ${interes} o numLetras = ${numLetras} no es un valor numérico válido, retorna 0, método LvUtil.numMetodoAleman`
      );
      return 0;
    }
    valorPrestamo = this.numFloat(valorPrestamo);
    interes = this.numFloat(interes);
    numLetras = this.numInt(numLetras);
    let CuotasPagos = [];
    if (interes >= 1) {
      interes = interes / 100;
    }
    valInteresFijo = valorPrestamo * interes;
    let mc = 0;
    for (let i = 0; i <= numLetras; i++) {
      if (i == 0) {
        mc = valorPrestamo;
        let tCuotaPago = new CuotaPresto(
          i,
          this.numFixed(valorPrestamo, this.NDEC),
          0,
          0,
          0,
          this.numFixed(this.numFloat(mc), this.NDEC)
        );
        CuotasPagos.push(tCuotaPago);
      } else if (i === numLetras) {
        let amortizPrev = CuotasPagos.find(
          (CuotaPresto) => CuotaPresto.nCuota === i - 1
        );
        let saldo = this.numFloat(amortizPrev.saldo);
        mc = saldo;
        saldo = this.numFloat(0);
        let tCuotaPago = new CuotaPresto(
          i,
          this.numFixed(saldo, this.NDEC),
          this.numFixed(mc + valInteresFijo, this.NDEC),
          this.numFixed(valInteresFijo, this.NDEC),
          this.numFixed(mc, this.NDEC),
          this.numFixed(saldo, this.NDEC)
        );
        CuotasPagos.push(tCuotaPago);
      } else {
        let amortizPrev = CuotasPagos.find(
          (CuotaPresto) => CuotaPresto.nCuota === i - 1
        );
        let saldo = this.numFloat(amortizPrev.saldo);
        mc = saldo;
        let tCuotaPago = new CuotaPresto(
          i,
          this.numFixed(saldo, this.NDEC),
          this.numFixed(valInteresFijo, this.NDEC),
          this.numFixed(valInteresFijo, this.NDEC),
          this.numFixed(0, this.NDEC),
          this.numFixed(mc, this.NDEC)
        );
        CuotasPagos.push(tCuotaPago);
      }
    }
    if (CuotasPagos.length > 0) {
      let totAmortizacion = new CuotaPresto(
        "TOTALES",
        this.numFixed(valorPrestamo, this.NDEC),
        0,
        0,
        0,
        0
      );
      CuotasPagos.forEach((cp) => {
        totAmortizacion.pago += this.numFloat(cp.pago);
        totAmortizacion.valInteres += this.numFloat(cp.valInteres);
        totAmortizacion.amortizacion += this.numFloat(cp.amortizacion);
        console.log(cp.toString());
      });
      totAmortizacion.pago = this.numFixed(totAmortizacion.pago, this.NDEC);
      CuotasPagos.push(totAmortizacion);
      console.log(totAmortizacion.toString());
    }
    return this.numFixed(valInteresFijo, this.NDEC);
  }
  /**
   * Amortización de préstamo mediante método corporativo.
   * valInteres fijo (capital * interes), Amortizacion fija (Capital/numLetras),
   * CuotaFija (valInteresFijo + amoritizacionFija),
   * nuevo saldo = saldo prev - amorizacionFija
   * @param {*} valorPrestamo Number valor del prestamo
   * @param {*} interes Number tasa de interes debe estar a la misma periodicidad que numLetras, si es mayor que 1, divide para 100
   * @param {*} numLetras Number cantidad de letras en que se paga el prestamo, debe estar a la misma periodicidad que el interes o tasa
   * @returns Number cuotaFija
   */
  static numMetodoCorporativo(
    valorPrestamo = undefined,
    interes = undefined,
    numLetras = undefined
  ) {
    let valInteresFijo = 0,
      amortizacionFija = 0,
      cuotaFija = 0;
    if (
      !this.numDecimalValido(valorPrestamo) ||
      !this.numDecimalValido(interes) ||
      !this.numEnteroValido(numLetras)
    ) {
      console.error(
        `Parámetro valorPrestamo = ${valorPrestamo} o interes = ${interes} o numLetras = ${numLetras} no es un valor numérico válido, retorna 0, método LvUtil.numMetodoAleman`
      );
      return 0;
    }
    valorPrestamo = this.numFloat(valorPrestamo);
    interes = this.numFloat(interes);
    numLetras = this.numInt(numLetras);
    let CuotasPagos = [];
    if (interes >= 1) {
      interes = interes / 100;
    }
    valInteresFijo = this.numFloat(
      this.numFixed(valorPrestamo * interes, this.NDEC)
    );
    amortizacionFija = this.numFloat(
      this.numFixed(valorPrestamo / numLetras, this.NDEC)
    );
    if (valorPrestamo > amortizacionFija * numLetras) {
      amortizacionFija += 0.01;
    }
    cuotaFija = amortizacionFija + valInteresFijo;
    let mc = 0;
    for (let i = 0; i <= numLetras; i++) {
      if (i == 0) {
        mc = valorPrestamo;
        let tCuotaPago = new CuotaPresto(
          i,
          this.numFixed(valorPrestamo, this.NDEC),
          0,
          0,
          0,
          this.numFixed(this.numFloat(mc), this.NDEC)
        );
        CuotasPagos.push(tCuotaPago);
      } else {
        let amortizPrev = CuotasPagos.find(
          (CuotaPresto) => CuotaPresto.nCuota === i - 1
        );
        let saldo = this.numFloat(amortizPrev.saldo) - amortizacionFija;
        mc = saldo + valInteresFijo;
        let tCuotaPago = new CuotaPresto(
          i,
          this.numFixed(saldo, this.NDEC),
          this.numFixed(amortizacionFija + valInteresFijo, this.NDEC),
          this.numFixed(valInteresFijo, this.NDEC),
          this.numFixed(amortizacionFija, this.NDEC),
          this.numFixed(mc, this.NDEC)
        );
        CuotasPagos.push(tCuotaPago);
      }
    }
    if (CuotasPagos.length > 0) {
      let totAmortizacion = new CuotaPresto(
        "TOTALES",
        this.numFixed(valorPrestamo, this.NDEC),
        0,
        0,
        0,
        0
      );
      CuotasPagos.forEach((cp) => {
        totAmortizacion.pago += this.numFloat(cp.pago);
        totAmortizacion.valInteres += this.numFloat(cp.valInteres);
        totAmortizacion.amortizacion += this.numFloat(cp.amortizacion);
        console.log(cp.toString());
      });
      totAmortizacion.pago = this.numFixed(totAmortizacion.pago, this.NDEC);
      CuotasPagos.push(totAmortizacion);
      console.log(totAmortizacion.toString());
    }
    return this.numFixed(cuotaFija, this.NDEC);
  }
  /**
   * Convierte el número que recibe como argumento a su representación escrita con letra.
   * @param {number} cantidad valor float a convertir
   * @returns String Descripcion de la cantidad recibida en letras mayúsculas
   */
  static strCantidadEnLetra(cantidad = undefined) {
    if (!this.numFloat(cantidad) || cantidad <= 0) {
      console.error(
        `Parámetro cantidad = ${cantidad} no es un valor numérico válido, retorna 0, método LvUtil.strCantidadEnLetra`
      );
      return "CERO";
    }
    cantidad = this.numFixed(cantidad, 2);
    let datoarr = cantidad.split(".");
    let decimal = datoarr[1] + "/100";
    let parteEntera = datoarr[0];
    if (this.numInt(parteEntera) >= 99999999999) {
      console.error(
        `Parámetro cantidad = ${cantidad} excede el valor máximo de la parte entero de representación numérica, retorna EXCEDE EL LIMITE, método LvUtil.strCantidadEnLetra`
      );
      return "MAYOR O IGUAL A MIL MILLONES, EXCEDE LOS 99999999999.99";
    }
    if (this.numInt(parteEntera) === 0) {
      return "CERO " + decimal;
    }
    let triUnidades = parteEntera % 1000;
    let triMiles = Math.trunc((parteEntera / 1000) % 1000);
    let triMillones = Math.trunc((parteEntera / 1000000) % 1000);
    let triMilMillones = Math.trunc((parteEntera / 1000000000) % 1000);
    let resultado = "";
    if (triMilMillones > 0)
      resultado += this.strTriTexto(triMilMillones) + "Mil ";
    if (triMillones > 0) resultado += this.strTriTexto(triMillones);
    if (triMilMillones == 0 && triMillones == 1) resultado += "Millón ";
    else if (triMilMillones > 0 || triMillones > 0) resultado += "Millones ";
    if (triMiles > 0) resultado += this.strTriTexto(triMiles) + "Mil ";
    if (triUnidades > 0) resultado += this.strTriTexto(triUnidades);
    return resultado.trim().toUpperCase() + " " + decimal;
  }
  /**
   * Convierte una cantidad de tres cifras a su representación escrita con letra.
   * @param {int} n numero o cantidad a convertir
   * @returns String representación con letras del número que se recibió como argumento.
   */
  static strTriTexto(n = 0) {
    let result = "";
    let centenas = Math.trunc(n / 100);
    let decenas = Math.trunc((n % 100) / 10);
    let unidades = Math.trunc(n % 10);
    switch (centenas) {
      case 0:
        break;
      case 1:
        if (decenas == 0 && unidades == 0) {
          result += "Cien ";
          return result;
        } else result += "Ciento ";
        break;
      case 2:
        result += "Doscientos ";
        break;
      case 3:
        result += "Trescientos ";
        break;
      case 4:
        result += "Cuatrocientos ";
        break;
      case 5:
        result += "Quinientos ";
        break;
      case 6:
        result += "Seiscientos ";
        break;
      case 7:
        result += "Setecientos ";
        break;
      case 8:
        result += "Ochocientos ";
        break;
      case 9:
        result += "Novecientos ";
        break;
    }
    switch (decenas) {
      case 0:
        break;
      case 1:
        if (unidades == 0) {
          result += "Diez ";
          return result;
        } else if (unidades == 1) {
          result += "Once ";
          return result;
        } else if (unidades == 2) {
          result += "Doce ";
          return result;
        } else if (unidades == 3) {
          result += "Trece ";
          return result;
        } else if (unidades == 4) {
          result += "Catorce ";
          return result;
        } else if (unidades == 5) {
          result += "Quince ";
          return result;
        } else result += "Dieci";
        break;
      case 2:
        if (unidades == 0) {
          result += "Veinte ";
          return result;
        } else result += "Veinti";
        break;
      case 3:
        result += "Treinta ";
        break;
      case 4:
        result += "Cuarenta ";
        break;
      case 5:
        result += "Cincuenta ";
        break;
      case 6:
        result += "Sesenta ";
        break;
      case 7:
        result += "Setenta ";
        break;
      case 8:
        result += "Ochenta ";
        break;
      case 9:
        result += "Noventa ";
        break;
    }
    if (decenas > 2 && unidades > 0) result += "y ";
    switch (unidades) {
      case 0:
        break;
      case 1:
        if (decenas > 0) {
          result += "Uno ";
        } else if (centenas == 0) {
          result += "Un ";
        } else {
          result += "Uno ";
        }
        break;
      case 2:
        result += "Dos ";
        break;
      case 3:
        result += "Tres ";
        break;
      case 4:
        result += "Cuatro ";
        break;
      case 5:
        result += "Cinco ";
        break;
      case 6:
        result += "Seis ";
        break;
      case 7:
        result += "Siete ";
        break;
      case 8:
        result += "Ocho ";
        break;
      case 9:
        result += "Nueve ";
        break;
    }
    return result;
  }
  /*
    static strAjaxUrl(url){
        var resp = $.ajax({
            url: url,
            method: 'GET'
        });
        return resp;
    }
    */
  /**
   * Obtener la diferencia entre dos fechas en formato yyyy-mm-dd
   * @param {*} f2 String de fecha minuendo en formato dd-mm-yyyy
   * @param {*} f1 String de fecha sustraendo en formato dd-mm-yyyy
   * @returns String representando yyyy-mm-dd
   */
  static dtDiffFechas(f2 = "", f1 = "") {
    let regMes30 = /^(4|6|9|11)$/;
    if (!this.dtFechaValido(f2) || !this.dtFechaValido(f1)) {
      return console.error(
        "Fechas no coinciden con formato dd-mm-yyyy, metodo LvUtil.dtDiffFechas"
      );
    }
    f2 = new Date(this.dt_dmy_To_ymd(f2));
    f1 = new Date(this.dt_dmy_To_ymd(f1));
    if (f2.getTime() < f1.getTime()) {
      return console.error(
        "Diferencia de Fechas no puede ser negativo, metodo LvUtil.dtDiffFechas"
      );
    } else if (f2.getTime() === f1.getTime) {
      return "0000-00-00";
    }
    let f2y = f2.getFullYear(),
      f2m = f2.getMonth() + 1,
      f2d = f2.getDate(),
      f1y = f1.getFullYear(),
      f1m = f1.getMonth() + 1,
      f1d = f1.getDate(),
      llevo = 0,
      ry = 0,
      rm = 0,
      rd = 0;

    rd = f2d - f1d;
    if (rd < 0) {
      if (f1m == 2) {
        llevo = 28;
        if (this.dtAnioBisiesto(f1m) || this.dtAnioBisiesto(f2m)) llevo = 29;
      } else if (regMes30.test(f1m)) {
        llevo = 30;
      } else {
        llevo = 31;
      }
      rd = rd + llevo;
      f2m--;
    }
    rm = f2m - f1m;
    if (rm < 0) {
      rm = rm + 12;
      f2y--;
    }
    ry = f2y - f1y;
    rd = (rd <= 9 ? "0" : "") + rd;
    rm = (rm <= 9 ? "0" : "") + rm;
    ry = (ry <= 9 ? "0" : "") + ry;
    return "" + ry + "-" + rm + "-" + rd;
  }
  static runSetTimeOut(valor = undefined) {
    console.log("Inicio");
    setTimeout(() => {
      console.log(
        "Ejecutando setTimeout, esto se ejecuta una sola vez. En l2v2Utilidades.runSetTimeout"
      );
    }, 3000);
  }
  static runSetIntervalo(valor = undefined) {
    console.log("Inicio");
    setInterval(() => {
      console.log(
        "Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto tiempo. En l2v2Utilidades.runSetInterval"
      );
    }, 3000);
  }
}

class CuotaPresto {
  constructor(
    nCuota,
    saldo,
    pago,
    valInteres,
    amortizacion,
    montoCompuestoSiguiente
  ) {
    this.nCuota = nCuota;
    this.saldo = saldo;
    this.pago = pago;
    this.valInteres = valInteres;
    this.amortizacion = amortizacion;
    this.montoCompuestoSiguiente = montoCompuestoSiguiente;
  }
  toString() {
    return `nCuota: ${this.nCuota}, saldo: ${this.saldo}, pago: ${this.pago}, valInteres: ${this.valInteres}, amortizacion: ${this.amortizacion}, montoCompuestoSiguiente: ${this.montoCompuestoSiguiente}`;
  }
}
