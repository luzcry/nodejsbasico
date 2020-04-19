console.log('algo');

console.error('error');

console.warn('warn');
//table muestra datos en forma de tabla
let tabla = [{
    a: 1,
    b: 'Z'
}, {
    a: 2,
    b: 'otra'
}]

console.table(tabla);

//permite agrupar log para decir que forman parte de una misma cosa
console.group('conversacion');
console.log('hola');
console.log('blablabla');
console.log('adios');
console.groupEnd('conversacion');

console.log('otra cosa de otra funcion');

function function1() {
    console.group('funcion1');
    console.log('esto es de la funcion 1');
    console.log('esto tambien');
    function2();
    console.log('hemos vuelto a la 1');
    console.groupEnd('function1');
}

function function2() {
    console.group('funcion 2');
    console.log('ahora estamos en la funcion 2');
    console.groupEnd('funcion 2');
}

console.log('empezamos');
function1();

console.count('veces');
console.count('veces');
console.countReset('veces');