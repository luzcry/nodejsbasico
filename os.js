/*El modulo de OS, Operative System, nos permite ejecutar acciones de más bajo nivel en nuestro sistema, permitiéndonos conocer una gran variedad de detalles del mismo.
Como la memoria disponible que tiene, el total de la memoria, la interfaz de red, etc.
Esto nos será de gran ayuda a la hora de ejecutar o crear proyectos que necesiten información de una maquina para ejecutar una operación.*/

const os = require("os");
//console.log(os.platform());
//console.log(os.arch());
//console.log(os.cpus().length);
//console.log(os.constants);
const size = 1024;

function kb(bytes) {
    return bytes / size
}

function mb(bytes) {
    return kb(bytes) / size
}

function gb(bytes) {
    return mb(bytes) / size
}
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());

console.log(os.networkInterfaces());