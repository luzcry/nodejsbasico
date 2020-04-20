//un proceso es algo que inicia y se termina
//libreria childprocess
/*Node nos permite ejecutar varios hilos de procesos desde el suyo propio, sin importar de que sea este proceso, es decir, puede ejecutar procesos de Python, otros procesos de Node u otro proceso que tengamos en nuestro sistema.
Para poder usar estos procesos usamos el modulo de child-process, este trae dos métodos que nos permitirá ejecutar los procesos que deseemos. El método exec y el método spawn.
El método exec nos permite ejecutar un comando en nuestro sistema, recibe como parametros el comando entero que deseemos y como segundo parámetro un callback con tres parámetros, un error, un stdout y un stderr.
El método spawn es parecido al método exec pero un poco más complejo, permitiéndonos conocer su estado y que datos procesa en cada momento del estado de comando ejecutado.*/

const { exec, spawn } = require("child_process");
//permite ejecutar cualquier comando en la terminal

/*exec("dir", (err, stdout, sterr) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(stdout);

})*/

//spawn nos permite invocar un proceso de node.js
let proceso = spawn("dir", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

//node esta orientado a eventos
proceso.stdout.on("data", function (dato) {
  console.log("¿está muerto?");

  console.log(process.killed);
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("el proceso terminó");
  console.log(proceso.killed);
});
