//filesystem permite acceder a archivos de muestro sistema
//nos traemos el módulo con require

const fs = require("fs");
console.log(fs);
//todos los métodos de fs se ejecutan de manera asíncrona
//leer un archivo

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No he podido escribirlo", err);
    } else {
      cb("Se ha escrito correctamente");
    }
  });
}

escribir(__dirname + "/archivo.txt", "soy un archivo nuevo", console.log);
//leer(__dirname + "archivo.txt", console.log)

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

//borrar(__dirname + "/archivo1.txt", console.log);