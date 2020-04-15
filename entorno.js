let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'No tengo web';
console.log('hola ' + nombre);
console.log('Mi web es ' + web);