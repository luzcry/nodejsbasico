function Hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("bla bla bla bla");
  });
}

function adios(nombre, otrocallback) {
  setTimeout(function () {
    console.log("adios", nombre);
    otrocallback();
  }, 1000);
}

//funcion refursiva
function conversacion(nombre, veces, callback) {
  if (veces >= 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre);
  }
}
console.log("Iniciando proceso...");
Hola("luis", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("proceso terminado");
  });
});

/*Realizar callbacks nos puede resultar bien para gestionar y controlar nuestras funciones asíncronas, pero usar estas en exceso nos puede llevar a un problema conocido callback hell, es el resultado de utilizar demasiados callbacks, que generan un código poco legible y mal organizado.
Para evitar este problema podremos refactorizar nuestro código creando funciones intermediarias, son funciones que tiene una lógica especial para tratar con estos tipos de problemas.
De igual forma, existen otras formas de evitar estos callback hell con las promesas o el async await.*/
