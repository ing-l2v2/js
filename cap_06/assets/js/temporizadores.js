console.log("Inicia el setTimeout");
let varDeTimeout = setTimeout(() => {
  console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez.");
}, 2000);
console.log("Posterior al setTimeout");

console.log("Inicia el setInterval");
let nveces = 0,
  milis = 3000;
let varDeIterval = setInterval(() => {
  console.log(
    `Ejecutando un setInterval, esto se ejecuta indefinidamente cada ${
      milis / 1000
    } segundos. Ejecución número ${nveces++}, ${new Date().toLocaleTimeString()}`
  );
}, milis);
console.log("Posterior al setTimeout", nveces);

varDeTimeout;
varDeIterval;

clearInterval(varDeIterval);

clearTimeout(varDeTimeout);

/* Código Síncrono Bloqueante */
(() => {
  console.log("Código Síncrono");
  console.log("Inicio");
  function dos() {
    console.log("Dos");
  }
  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }
  uno();
  console.log("Fin");
})();
/* Código Asíncrono No Bloqueante */
(() => {
  console.log("Código Asíncrono");
  console.log("Inicio");
  function dos() {
    setTimeout(() => {
      console.log("Dos");
    }, 1000);
  }
  function uno() {
    setTimeout(() => {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  }
  uno();
  console.log("Fin");
})();

/* Funciones callback */
function cuadradoCallback(valor, callback) {
  setTimeout(() => {
    callback(valor, valor * valor);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (valor, result) => {
  console.log("Inicia callback");
  console.log(`Callback ${valor}, ${result}`);

  cuadradoCallback(1, (valor, result) => {
    console.log(`Callback ${valor}, ${result}`);

    cuadradoCallback(2, (valor, result) => {
      console.log(`Callback ${valor}, ${result}`);

      cuadradoCallback(3, (valor, result) => {
        console.log(`Callback ${valor}, ${result}`);

        cuadradoCallback(4, (valor, result) => {
          console.log(`Callback ${valor}, ${result}`);

          cuadradoCallback(5, (valor, result) => {
            console.log(`Callback ${valor}, ${result}`);
          });
        });
      });
    });
  });
});

/* Promesa */
function cuadradoPromise(valor) {
  if (typeof valor !== "number") {
    return Promise.reject(`Error: el valor << ${valor} >> no es un número.`);
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        valor,
        result: valor * valor,
      });
    }, 0 | (Math.random() * 1000));
  });
}
cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.valor}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.result}`);
    return cuadradoPromise("3");
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.result}`);
    console.log("Fin de la Promise");
  })
  .catch((error) => console.error(error));

/* Función Asíncrona */
async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Function");
    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.valor}, ${obj.result}`);
    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.valor}, ${obj.result}`);
    obj = await cuadradoPromise("2");
    console.log(`Async Function: ${obj.valor}, ${obj.result}`);
    obj = await cuadradoPromise(3);
    console.log(`Async Function: ${obj.valor}, ${obj.result}`);
    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.valor}, ${obj.result}`);
    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.valor}, ${obj.result}`);
  } catch (error) {
    console.error(error);
  }
}

funcionAsincronaDeclarada();
