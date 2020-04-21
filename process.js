//const process = require("process");
/*Respuesta a:
Process
Process
El objecto process es una instancia de EventEmitter; podemos suscribirnos a el para escuchar eventos de node.

UncaughtException: Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.*/
//exit: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal.
process.on("beforeExit", () => {
  console.log("el proceso va a terminar");
});

process.on("exit", () => {
  console.log("el proceso acabó");
});

process.on("uncaughtException", (err, origin) => {
  console.error("vaya, se nos ha olvidado capturar un error");
  setTimeout(() => {
    console.log("esto viene desde las excepciones");
  }, 0);
});
setTimeout(() => {
  console.log("se va a ver");
}, 0);

funcionquenoexiste();

console.log("esto si el error no se recoje, no sale");
