console.log('Hola mundo');
/*lo primero que pasa es que se abre un proceso, va a interpretar todo el archivo, lo interpreta en código maquina y lo ejecuta. luego de que aparece el hola mundo se cierra el proceso.*/
//i hace un bucle for por segundo
let i = 0;
setInterval(function () {
    console.log(i);
    i++;
    /* if (i === 5) {
        let a = 3 + z;
    }*/
}, 1000); //cada segundo dispara un evento.
//el monohilo se detiene si consigue un error.

console.log('segunda instrucción');