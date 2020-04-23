//son datos en binario, nos permite trabajar con el dato de la forma mas cruda
//let buffer = Buffer.alloc(1);
//conjunto de datos binarios
//let buffer = Buffer.from([1, 2, 3]);

let buffer = Buffer.from("hola");
console.log(buffer);


//trabajar con el buffer posicion a posicion

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}
console.log(abc.toString());