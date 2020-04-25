//Un Stream es un canal de comunicación, un chunk es un pedazo de información que esta pasando por el canal. Puedes tomar un archivo muy grande, leerlo con un stream y contar cuanta veces pasa readable.Stream(‘on’ … y de que tamaño es la variable chunk. Chunk es como una convesión que se usa en casi todos los lenguajes que manejen Stream, pero en realidad tu le puedes poner que desees.
const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

/*let readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("UTF8");
readableStream.on("data", function (chunk) {
  data += chunk;
});

readableStream.on("end", function () {
  console.log(data);
});*/
//escribiendo una salida standar del sistema
process.stdout.write("hola");
process.stdout.write("que");
process.stdout.write("tal");

//buffer de transformacion, leer del fichero, pasarlo a mayusculas y escribir en salida standar
const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype.Transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus();
ReadableStream.pipe(mayus).pipe(process.stdout);

/*Un Stream es un canal de comunicación, un chunk es un pedazo de información que esta pasando por el canal. Puedes tomar un archivo muy grande, leerlo con un stream y contar cuanta veces pasa readable.Stream(‘on’ … y de que tamaño es la variable chunk. Chunk es como una convesión que se usa en casi todos los lenguajes que manejen Stream, pero en realidad tu le puedes poner que desees.*/
